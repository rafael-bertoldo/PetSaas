using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Domain.Enums
{
    public enum AppointmentCancellationReason
    {
        ClientRequest,
        ProfessionalUnavailable,
        ClinicRequest,
        NoAvailability,
        Other
    }
}
