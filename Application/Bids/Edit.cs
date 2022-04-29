using Domain;
using MediatR;
using Persistence;
using AutoMapper;
namespace Application.Bids
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Bid Bid {get;set;}

        }
        public class Handler: IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler (DataContext context,IMapper mapper)
            {
                _context =context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var bid= await _context.Bids.FindAsync(request.Bid.Id);
                bid.ProductId= request.Bid.ProductId ?? bid.ProductId;
                bid.BidAmount= request.Bid.BidAmount ;
                bid.SellerId= request.Bid.SellerId ?? bid.SellerId;

                 await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}