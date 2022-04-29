using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Bids;
using static MediatR.IMediator; 




namespace API.Controllers
{
    public class BidsController : BaseApiController
    {

    [HttpPost("/e-auction/api/v1/seller/add-bid/")]
    public async Task<IActionResult> CreateBid(Bid bid){
        return Ok(await Mediator.Send(new Create.Command {Bid=bid}));
    }



    [HttpGet("/e-auction/api/v1/seller/show-bids/")]
    public async Task<ActionResult<List<Bid>>> GetBids()
    {
        return await Mediator.Send(new List.Query());

        
    } 

    [HttpGet("/e-auction/api/v1/seller/show-bids/{id}")]
    public async Task <ActionResult<Bid>> GetBid(Guid id){
        return await Mediator.Send(new Details.Query{Id=id});
    }

    [HttpPut("/e-auction/api/v1/buyer/update-bid/{id}")]
    public async Task <IActionResult> EditBid(Guid id, Bid bid)
    {
        bid.Id=id;
        return Ok(await Mediator.Send(new Edit.Command{Bid=bid}));
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBid(Guid id)
    {
        return Ok(await Mediator.Send(new Delete.Command{Id=id}));
    }


    }
    
}