using Domain;
using MediatR;
using Persistence;
using AutoMapper;

namespace Application.Bids
{
    public class Delete
    {
            public class Command:IRequest
            {
                public Guid Id {get;set;}
            }


            public class Handler: IRequestHandler<Command>
            {
            private readonly DataContext _context;
                    public Handler(DataContext context)
                    {
                _context = context;

                    }

            public async Task <Unit> Handle (Command request, CancellationToken cancellationToken)
            {
                var bid= await _context.Bids.FindAsync(request.Id);
                _context.Remove(bid);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}