using PetSaas.Application.DTOs.Auth;
using PetSaas.Application.DTOs.Users;
using PetSaas.Application.Exceptions;
using PetSaas.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Application.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly IPasswordHasher _passwordHasher;
        private readonly IJwtTokenService _jwtTokenService;

        public AuthService(
            IUserRepository userRepository,
            IPasswordHasher passwordHasher,
            IJwtTokenService jwtTokenService)
        {
            _userRepository = userRepository;
            _passwordHasher = passwordHasher;
            _jwtTokenService = jwtTokenService;
        }

        public async Task<LoginResult> LoginAsync(
            LoginRequest request,
            CancellationToken cancellationToken = default)
        {
            var user = await _userRepository.GetByEmailAsync(
                request.Email,
                cancellationToken);

            if (user is null)
            {
                throw new InvalidCredentialsException("E-mail ou senha inválidos.");
            }

            if (!user.Active)
            {
                throw new InvalidCredentialsException("E-mail ou senha inválidos.");
            }

            var passwordIsValid = _passwordHasher.Verify(request.Password, user.PasswordHash);

            if (!passwordIsValid)
            {
                throw new InvalidCredentialsException("E-mail ou senha inválidos.");
            }

            user.MarkLogin();
            await _userRepository.SaveChangesAsync(cancellationToken);

            var tokenResult = _jwtTokenService.GenerateToken(user);

            return new LoginResult
            {
                AccessToken = tokenResult.Token,
                ExpiresAt = tokenResult.ExpiresAt,
                User = new UserResponse
                {
                    Id = user.Id,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email,
                    Active = user.Active,
                    LastLoginAt = user.LastLoginAt,
                    CreatedAt = user.CreatedAt,
                    UpdatedAt = user.UpdatedAt
                }
            };
        }
    }
}
