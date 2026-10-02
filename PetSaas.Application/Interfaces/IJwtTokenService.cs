using PetSaas.Application.DTOs.Auth;
using PetSaas.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Application.Interfaces
{
    public interface IJwtTokenService
    {
        JwtTokenResult GenerateToken(User user);
    }
}
