using Microsoft.EntityFrameworkCore;

namespace Lesson6HandsOnV2.Models
{
    public class CarsContext : DbContext 
    {
            public CarsContext(DbContextOptions<CarsContext> options) : base(options)
            {

            }

        public DbSet<Car> Cars { get; set; }

        
    }
}