using PetSaas.Application.DTOs.Users;
using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Application.DTOs.Auth
{
    public class LoginResult
    {
        public string AccessToken { get; set; } = string.Empty;
        public DateTimeOffset ExpiresAt { get; set; }
        public UserResponse User { get; set; } = new();
    }
}
