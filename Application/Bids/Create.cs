using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using static MediatR.IMediator;

namespace Application.Bids
{
    public class Create
    {
        public class Command: IRequest
        {
            public Bid Bid {get;set;}
        }

        public class Handler:  IRequestHandler<Command>
        {
        private readonly DataContext _context;
            public Handler (DataContext context){
                _context=context;
            }
        

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Bids.AddAsync(request.Bid);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
  }
}