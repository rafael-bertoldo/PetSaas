using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Application.DTOs.Users
{
    public class UserResponse
    {
        public Guid Id { get; init; }

        public string Email { get; init; } = string.Empty;

        public string FirstName { get; init; } = string.Empty;

        public string LastName { get; init; } = string.Empty;

        public bool Active { get; init; }

        public DateTime? LastLoginAt { get; init; }

        public DateTime CreatedAt { get; init; }

        public DateTime UpdatedAt { get; init; }
    }
}
