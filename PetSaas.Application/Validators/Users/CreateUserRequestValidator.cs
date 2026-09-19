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
                .MinimumLength(8)
                .Matches("[A-Z]")
                .WithMessage("A senha deve conter pelo menos uma letra maiúscula.")
                .Matches("[a-z]")
                .WithMessage("A senha deve conter pelo menos uma letra minúscula.")
                .Matches("[0-9]")
                .WithMessage("A senha deve conter pelo menos um número.")
                .Matches("[^a-zA-Z0-9]")
                .WithMessage("A senha deve conter pelo menos um caractere especial.");

            RuleFor(request => request.FirstName)
                .NotEmpty()
                .MaximumLength(100);

            RuleFor(request => request.LastName)
                .NotEmpty()
                .MaximumLength(100);
        }
    }
}
