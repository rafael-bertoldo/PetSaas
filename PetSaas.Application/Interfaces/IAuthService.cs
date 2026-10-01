using PetSaas.Application.DTOs.Auth;

namespace PetSaas.Application.Interfaces
{
    public interface IAuthService
    {
        Task<LoginResult> LoginAsync(
            LoginRequest request,
            CancellationToken cancellationToken = default);
    }
}
