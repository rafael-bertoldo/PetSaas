using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PetSaas.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Infrastructure.Persistence.Configurations.Identity
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("users");

            builder.HasKey(user => user.Id);

            builder.Property(user => user.Email)
                .IsRequired()
                .HasMaxLength(320);

            builder.Property(user => user.PasswordHash)
                .IsRequired()
                .HasMaxLength(255);

            builder.Property(user => user.FirstName)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(user => user.LastName)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(user => user.Active)
                .IsRequired();

            builder.Property(user => user.CreatedAt)
                .IsRequired();

            builder.Property(user => user.UpdatedAt)
                .IsRequired();

            builder.HasIndex(user => user.Email)
                .IsUnique();
        }
    }
}
