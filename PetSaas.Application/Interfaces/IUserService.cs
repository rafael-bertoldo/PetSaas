using PetSaas.Application.DTOs.Users;
using PetSaas.Domain.Entities;

namespace PetSaas.Application.Interfaces
{
    public interface IUserService
    {
        Task<UserResponse?> GetByIdAsync(
            Guid id,
            CancellationToken cancellationToken = default);

        Task<UserResponse?> GetByEmailAsync(
            string email,
            CancellationToken cancellationToken = default);

        Task<UserResponse> CreateAsync(
            CreateUserRequest user,
            CancellationToken cancellationToken = default);
    }
}
