using ETicaret.API.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaret.API.Domain.Entities
{
    public class Product : BaseEntity
    {
        public string Name { get; set; } = String.Empty;
        public int Stock { get; set; }
        public float Price { get; set; }

        public ICollection<Order> Orders { get; set; }
    }
}
