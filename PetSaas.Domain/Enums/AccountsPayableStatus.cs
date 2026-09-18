using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Domain.Enums
{
    public enum AccountsPayableStatus
    {
        Open,
        PartiallyPaid,
        Paid,
        Overdue,
        Cancelled
    }
}
