using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext:DbContext
    {
        public DataContext (DbContextOptions options): base(options){

        }
      
     protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Addd the Postgres Extension for UUID generation
      
            // define configurations
         
        }  
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
       /// optionsBuilder.UseNpgsql("Server=localhost; Port=5432 ; User Id=admin; Password=secret");
        optionsBuilder.UseSqlServer(@"Server=tcp:auctionapiserver.database.windows.net,1433;Initial Catalog=auctiondb;Persist Security Info=False;User ID=asfend;Password=Hariseldon77!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
    }



        public DbSet <Product> Products {get;set;}
        public DbSet <Seller> Sellers {get;set;}
        public DbSet <Bid> Bids {get;set;}
        
        
    }
}