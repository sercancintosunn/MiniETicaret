using ETicaret.API.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaret.API.Domain.Entities
{
    public class Order : BaseEntity
    {
        public int CustomerId { get; set; }
        public string Description { get; set; } = String.Empty;
        public string Adress { get; set; } = String.Empty;

        public ICollection<Product> Products { get; set; }
        public Customer Customer { get; set; }
    }
}
