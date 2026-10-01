using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PetSaas.Application.DTOs.Auth;
using PetSaas.Application.Interfaces;
using System.Security.Claims;

namespace PetSaas.Api.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IHostEnvironment _environment;
        private readonly IUserService _userService;

        public AuthController(
            IAuthService authService,
            IHostEnvironment environment,
            IUserService userService)
        {
            _authService = authService;
            _environment = environment;
            _userService = userService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(
            LoginRequest request,
            CancellationToken cancellationToken = default)
        {
            var result = await _authService.LoginAsync(
                request,
                cancellationToken);

            Response.Cookies.Append(
                "access_token",
                result.AccessToken,
                new CookieOptions
                {
                    HttpOnly = true,
                    Secure = !_environment.IsDevelopment(),
                    SameSite = SameSiteMode.Lax,
                    Expires = result.ExpiresAt,
                    Path = "/"
                });

            return Ok(new LoginResponse
            {
                ExpiresAt = result.ExpiresAt,
                User = result.User
            });
        }

        [Authorize]
        [HttpGet("me")]
        public async Task<IActionResult> GetMe(CancellationToken cancellationToken = default)
        {
            var userClaim = User.FindFirstValue(ClaimTypes.NameIdentifier);
            
            if (!Guid.TryParse(userClaim, out var userId))
            {
                return Unauthorized();
            }

            var user = await _userService.GetByIdAsync(
                userId,
                cancellationToken);

            if (user is null)
            {
                return NotFound();
            }

            return Ok(user);
        }
    }
}
