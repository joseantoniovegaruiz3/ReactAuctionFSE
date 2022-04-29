using AutoMapper;
using Domain;

namespace Application.Bids
{
    public class MappingProfiles:Profile

    {
        public MappingProfiles(){
            CreateMap<Bid,Bid>();
        }
        
    }
}