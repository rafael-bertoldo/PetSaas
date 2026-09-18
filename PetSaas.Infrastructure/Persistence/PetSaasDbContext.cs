using Microsoft.EntityFrameworkCore;
using PetSaas.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PetSaas.Infrastructure.Persistence
{
    public class PetSaasDbContext : DbContext
    {
        public PetSaasDbContext(DbContextOptions<PetSaasDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users => Set<User>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(
                typeof(PetSaasDbContext).Assembly);

            base.OnModelCreating(modelBuilder);
        }
    }
}
