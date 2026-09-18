using FluentValidation;
using PetSaas.Application.DTOs.Users;
using PetSaas.Application.Interfaces;
using PetSaas.Domain.Entities;

namespace PetSaas.Application.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IPasswordHasher _passwordHasher;
        private readonly IValidator<CreateUserRequest> _createUserValidator;

        public UserService(
            IUserRepository userRepository,
            IPasswordHasher passwordHasher,
            IValidator<CreateUserRequest> createUserValidator)
        {
            _userRepository = userRepository;
            _passwordHasher = passwordHasher;
            _createUserValidator = createUserValidator;
        }

        public async Task<UserResponse?> GetByIdAsync(
            Guid id,
            CancellationToken cancellationToken = default)
        {
            var user = await _userRepository.GetByIdAsync(
                id,
                cancellationToken);

            if (user is null)
            {
                return null;
            }

            return new UserResponse
            {
                Id = user.Id,
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Active = user.Active,
                LastLoginAt = user.LastLoginAt,
                CreatedAt = user.CreatedAt,
                UpdatedAt = user.UpdatedAt,
            };
        }

        public async Task<UserResponse?> GetByEmailAsync(
            string email,
            CancellationToken cancellationToken = default)
        {
            var user = await _userRepository.GetByEmailAsync(
                email,
                cancellationToken);

            if (user is null)
            {
                return null;
            }

            return new UserResponse
            {
                Id = user.Id,
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Active = user.Active,
                LastLoginAt = user.LastLoginAt,
                CreatedAt = user.CreatedAt,
                UpdatedAt = user.UpdatedAt,
            };
        }

        public async Task<UserResponse> CreateAsync(
            CreateUserRequest request,
            CancellationToken cancellationToken = default)
        {
            var validationResult = await _createUserValidator.ValidateAsync(
                request,
                cancellationToken);

            if (!validationResult.IsValid)
            {
                throw new ValidationException(validationResult.Errors);
            }

            var passwordHash = _passwordHasher.Hash(request.Password);

            var user = new User(
                request.Email,
                passwordHash,
                request.FirstName,
                request.LastName
            );

            await _userRepository.AddAsync(
                user,
                cancellationToken);

            await _userRepository.SaveChangesAsync(cancellationToken);

            return new UserResponse
            {
                Id = user.Id,
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Active = user.Active,
                LastLoginAt = user.LastLoginAt,
                CreatedAt = user.CreatedAt,
                UpdatedAt = user.UpdatedAt
            };
        }
    }
}
