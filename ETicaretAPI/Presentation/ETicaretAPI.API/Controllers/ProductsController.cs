using ETicaret.API.Domain.Entities;
using ETicaretAPI.Application.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductReadRepository _productReadRepository;
        private readonly IProductWriteRepository _productWriteRepository;

        private readonly IOrderWriteRepository _orderWriteRepository;
        private readonly ICustomerWriteRepository _customerWriteRepository;
        private readonly IOrderReadRepository _orderReadRepository;

        public ProductsController(IProductReadRepository productReadRepository,IProductWriteRepository productWriteRepository,IOrderWriteRepository orderWriteRepository,ICustomerWriteRepository customerWriteRepository,IOrderReadRepository orderReadRepository)
        {
            _productReadRepository = productReadRepository;
            _productWriteRepository = productWriteRepository;
            _orderWriteRepository = orderWriteRepository;
            _customerWriteRepository = customerWriteRepository;
            _orderReadRepository = orderReadRepository;
        }

        [HttpGet]
        public async Task Get()
        {
            Order o = await _orderReadRepository.GetByIdAsync("b3b19e59-df86-4755-b828-b8a05cdfdb08");
            o.Adress = "Tekirdağ Süleymanpaşa";
            await _orderWriteRepository.SaveAsync();
        }

    }
}
