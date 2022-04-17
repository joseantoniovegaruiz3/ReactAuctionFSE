using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
namespace API.Controllers
{
    public class BidsController : BaseApiController
    {
        private readonly DataContext _context;
        public BidsController(DataContext context)
        {
            _context = context;


        }

    [HttpGet("/e-auction/api/v1/seller/show-bids/")]
    public async Task<ActionResult<List<Bid>>> GetBids()
    {
        return await _context.Bids.ToListAsync();

        
    } 

    [HttpGet("/e-auction/api/v1/seller/show-bids/{id}")]
    public async Task <ActionResult<Bid>> GetBid(Guid id){
        return await _context.Bids.FindAsync(id);
    }


    }
    
}