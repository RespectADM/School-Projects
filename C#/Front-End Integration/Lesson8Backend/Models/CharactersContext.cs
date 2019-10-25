using Microsoft.EntityFrameworkCore;

namespace Lesson8Backend.Models
{
    public class CharactersContext : DbContext {
        public CharactersContext(DbContextOptions<CharactersContext> options) :
        base(options) {

        }

        public DbSet<Character> Characters { get; set; }
        public DbSet<Deleted> Deletes { get; set; }
    }
}