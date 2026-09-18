using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Npgsql;

namespace PetSaas.Api.Middlewares
{
    public class ExceptionHandlingMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionHandlingMiddleware(RequestDelegate next)
        {
            _next = next ?? throw new ArgumentNullException(nameof(next));
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (ValidationException exception)
            {
                context.Response.StatusCode = StatusCodes.Status400BadRequest;

                var errors = exception.Errors
                    .GroupBy(error => error.PropertyName)
                    .ToDictionary(
                        group => group.Key,
                        group => group
                            .Select(error => error.ErrorMessage)
                            .ToArray());

                await context.Response.WriteAsJsonAsync(new
                {
                    errors
                });
            }
            catch (DbUpdateException exception)
            {
                if (exception.InnerException is PostgresException postgresException &&
                    postgresException.SqlState == "23505")
                {
                    context.Response.StatusCode = StatusCodes.Status409Conflict;

                    await context.Response.WriteAsJsonAsync(new
                    {
                        error = "Já existe um registro com os mesmos dados únicos."
                    });

                    return;
                }

                throw;
            }
        }
    }
}
