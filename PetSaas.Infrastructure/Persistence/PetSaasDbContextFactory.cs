using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace PetSaas.Infrastructure.Persistence
{
    public class PetSaasDbContextFactory : IDesignTimeDbContextFactory<PetSaasDbContext>
    {
        public PetSaasDbContext CreateDbContext(string[] args)
        {
            var connectionString = Environment.GetEnvironmentVariable("ConnectionStrings__DefaultConnection");

            if (string.IsNullOrWhiteSpace(connectionString))
            {
                throw new InvalidOperationException("Environment variable 'ConnectionStrings__DefaultConnection' was not found.");
            }

            var optionsBuilder = new DbContextOptionsBuilder<PetSaasDbContext>();

            optionsBuilder.UseNpgsql(connectionString);

            return new PetSaasDbContext(optionsBuilder.Options);
        }
    }
}
