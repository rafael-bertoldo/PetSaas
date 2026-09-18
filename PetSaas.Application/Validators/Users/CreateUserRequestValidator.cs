using FluentValidation;
using PetSaas.Application.DTOs.Users;

namespace PetSaas.Application.Validators.Users
{
    public class CreateUserRequestValidator : AbstractValidator<CreateUserRequest>
    {
        public CreateUserRequestValidator()
        {
            RuleFor(request => request.Email)
                .NotEmpty()
                .EmailAddress()
                .MaximumLength(320);

            RuleFor(request => request.Password)
                .NotEmpty()
                .MinimumLength(8);

            RuleFor(request => request.FirstName)
                .NotEmpty()
                .MaximumLength(100);

            RuleFor(request => request.LastName)
                .NotEmpty()
                .MaximumLength(100);
        }
    }
}
