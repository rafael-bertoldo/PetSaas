using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Application.DTOs.Auth
{
    public class JwtTokenResult
    {
        public string Token { get; set; } = string.Empty;
        public DateTimeOffset ExpiresAt { get; set; }
    }
}
