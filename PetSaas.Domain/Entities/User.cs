using PetSaas.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Domain.Entities
{
    public class User : BaseEntity
    {
        public string Email { get; private set; } = string.Empty;
        public string PasswordHash { get; private set; } = string.Empty;
        public string FirstName { get; private set; } = string.Empty;
        public string LastName { get; private set; } = string.Empty;

        public bool Active { get; private set; }

        public DateTime? LastLoginAt { get; private set; }

        public User(
            string email,
            string passwordHash,
            string firstName,
            string lastName)
        {
            Id = Guid.NewGuid();
            Email = email;
            PasswordHash = passwordHash;
            FirstName = firstName;
            LastName = lastName;
            Active = true;
            CreatedAt = DateTime.UtcNow;
            UpdatedAt = DateTime.UtcNow;
        }
    }
}
