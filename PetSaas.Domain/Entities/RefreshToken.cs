using PetSaas.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Domain.Entities
{
    public class RefreshToken : BaseEntity
    {
        public Guid UserId { get; private set; }
        public string TokenHash { get; private set; } = string.Empty;
        public DateTimeOffset ExpiresAt { get; private set; }
        public DateTimeOffset? RevokedAt { get; private set; }
        public Guid? ReplacedByTokenId { get; private set; }

        public RefreshToken(
            Guid userId,
            string tokenHash,
            DateTimeOffset expiresAt)
        {
            if (userId == Guid.Empty)
            {
                throw new ArgumentException(
                    "UserId cannot be empty.",
                    nameof(userId));
            }

            if (string.IsNullOrWhiteSpace(tokenHash))
            {
                throw new ArgumentException(
                    "Token hash cannot be empty.",
                    nameof(tokenHash));
            }

            if (expiresAt <= DateTimeOffset.UtcNow)
            {
                throw new ArgumentException(
                    "Refresh token expiration must be in the future.",
                    nameof(expiresAt));
            }

            Id = Guid.NewGuid();
            UserId = userId;
            TokenHash = tokenHash;
            ExpiresAt = expiresAt;
            CreatedAt = DateTime.UtcNow;
            UpdatedAt = DateTime.UtcNow;
        }

        public void Revoke()
        {
            if (RevokedAt.HasValue)
            {
                return;
            }

            RevokedAt = DateTimeOffset.UtcNow;
            UpdatedAt = DateTime.UtcNow;
        }

        public void MarkAsReplaced(Guid replacementTokenId)
        {
            if (replacementTokenId == Guid.Empty)
            {
                throw new ArgumentException(
                    "Replacement token id cannot be empty.",
                    nameof(replacementTokenId));
            }

            ReplacedByTokenId = replacementTokenId;
            UpdatedAt = DateTime.UtcNow;
        }
    }
}
