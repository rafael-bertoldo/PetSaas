using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Domain.Enums
{
    public enum AppointmentStatus
    {
        Scheduled,
        Confirmed,
        InProgress,
        Completed,
        Cancelled,
        NoShow
    }
}
