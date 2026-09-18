using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Application.DTOs.Users
{
    public class CreateUserRequest
    {
        public string Email { get; init; } = string.Empty;

        public string Password { get; init; } = string.Empty;

        public string FirstName { get; init; } = string.Empty;

        public string LastName { get; init; } = string.Empty;
    }
}
