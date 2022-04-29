using MediatR;
using Domain;
using System.Collections.Generic;
using Persistence;
using Microsoft.EntityFrameworkCore;
namespace Application.Bids
{
    public class List
    {
        public class Query :IRequest<List<Bid>>{


        }
        public class Handler: IRequestHandler<Query,List<Bid>>
        {
        private readonly DataContext _context;
            public Handler(DataContext context){
            _context = context;

            }
            public async Task<List<Bid>> Handle(Query request, CancellationToken cancellationToken){
                return await _context.Bids.ToListAsync();
            }
        }
    }
}