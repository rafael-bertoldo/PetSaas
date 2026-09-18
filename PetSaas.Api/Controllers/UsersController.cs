using Microsoft.AspNetCore.Mvc;
using PetSaas.Application.DTOs.Users;
using PetSaas.Application.Interfaces;

namespace PetSaas.Api.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> GetByid(
            Guid id,
            CancellationToken cancellationToken)
        {
            var user = await _userService.GetByIdAsync(
                id,
                cancellationToken);

            if (user is null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> Create(
            CreateUserRequest request,
            CancellationToken cancellationToken = default)
        {
            var user = await _userService.CreateAsync(
                request,
                cancellationToken);

            return CreatedAtAction(
                nameof(GetByid),
                new { id = user.Id },
                user);
        }

        [HttpGet]
        public async Task<IActionResult> GetByEmail(
            string email,
            CancellationToken cancellationToken = default)
        {
            var user = await _userService.GetByEmailAsync(
                email,
                cancellationToken);

            if (user is null)
            {
                return NotFound();
            }

            return Ok(user);
        }
    }
}
