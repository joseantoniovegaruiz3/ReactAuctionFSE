using System;

 

namespace Domain

{

    public class Product

    {

        public Guid Id { get; set; }

        public string ProductName { get; set; }

        public string ShortDescription { get; set; }

        public string DetailedDescription { get; set; }

        public string Category { get; set; }

        public string StartingPrice{get;set;}

        public DateTime BidEnDate{get;set;}

 

    }

}

 