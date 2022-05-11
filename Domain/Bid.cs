
using System;

namespace Domain

{

    public class Bid

    {
           public Guid Id { get; set; }

        public double BidAmount { get; set; }

        public string? ProductId { get; set; }

        public string? SellerId { get; set; }
        public string? BuyerId { get; set; }

       

    }

}