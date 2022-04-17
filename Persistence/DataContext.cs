using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext:DbContext
    {
        public DataContext (DbContextOptions options): base(options){

        }
      
      
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=auction.db");
    }

        public DbSet <Product> Products {get;set;}
        public DbSet <Seller> Sellers {get;set;}
        public DbSet <Bid> Bids {get;set;}
        
        
    }
}