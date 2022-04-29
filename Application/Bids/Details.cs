using Domain;
using MediatR;
using System;
using Persistence;
namespace Application.Bids
{
    public class Details
    {
        public class Query: IRequest<Bid>
        {
            public Guid Id {get;set;} 
        }  
        public class Handler: IRequestHandler <Query,Bid>
        {
        private readonly DataContext _context;
            public Handler(DataContext context){
            _context = context;

            }
            public async Task<Bid> Handle(Query request, CancellationToken cancellationToken){
                    return await _context.Bids.FindAsync(request.Id); 
            }
        }
    }
}