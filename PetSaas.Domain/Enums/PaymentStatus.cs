using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Domain.Enums
{
    public enum PaymentStatus
    {
        Pending,
        Completed,
        Cancelled,
        Refunded,
        PartiallyRefunded
    }
}
