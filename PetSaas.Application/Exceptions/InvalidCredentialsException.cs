using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Application.Exceptions
{
    public class InvalidCredentialsException : Exception
    {
        public InvalidCredentialsException(string message) : base(message)
        {
        }
    }
}
