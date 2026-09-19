using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Application.DTOs.Users
{
    public class CreateUserRequest
    {
        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;

        public string FirstName { get; set; } = string.Empty;

        public string LastName { get; set; } = string.Empty;
    }
}
