using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PetSaas.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Infrastructure.Persistence.Configurations.Identity
{
    public class RefreshTokenConfiguration : IEntityTypeConfiguration<RefreshToken>
    {
        public void Configure(EntityTypeBuilder<RefreshToken> builder)
        {
            builder.ToTable("refresh_tokens");

            builder.HasKey(rt => rt.Id);

            builder.Property(rt => rt.UserId)
                .IsRequired();

            builder.Property(refreshToken => refreshToken.TokenHash)
                .IsRequired()
                .HasMaxLength(255);

            builder.Property(refreshToken => refreshToken.ExpiresAt)
                .IsRequired();

            builder.Property(refreshToken => refreshToken.CreatedAt)
                .IsRequired();

            builder.Property(refreshToken => refreshToken.UpdatedAt)
                .IsRequired();

            builder.Property(refreshToken => refreshToken.RevokedAt);

            builder.Property(refreshToken => refreshToken.ReplacedByTokenId);

            builder.HasIndex(refreshToken => refreshToken.TokenHash)
                .IsUnique();

            builder.HasIndex(refreshToken => refreshToken.UserId);

            builder.HasOne<User>()
                .WithMany()
                .HasForeignKey(rt => rt.UserId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
