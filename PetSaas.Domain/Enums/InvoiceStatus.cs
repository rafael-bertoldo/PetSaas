using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Domain.Enums
{
    public enum InvoiceStatus
    {
        Draft,
        Pending,
        Authorized,
        Rejected,
        Cancelled
    }
}
