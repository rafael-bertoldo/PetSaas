using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Domain.Enums
{
    public enum InventoryMovement
    {
        Purchase,
        Sale,
        Adjustment,
        TransferIn,
        TransferOut,
        Return,
        Loss
    }
}
