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

        public ProductsController(IProductReadRepository productReadRepository,IProductWriteRepository productWriteRepository)
        {
            _productReadRepository = productReadRepository;
            _productWriteRepository = productWriteRepository;
        }

        [HttpGet]
        public async Task Get()
        {
            //await _productWriteRepository.AddRangeAsync(new()
            //{
            //    new() {Id = Guid.NewGuid(),Name =  "Product1",Price=100,Stock=10,CreatedDate = DateTime.UtcNow},
            //    new() {Id = Guid.NewGuid(),Name =  "Product2",Price=200,Stock=20,CreatedDate = DateTime.UtcNow},
            //    new() {Id = Guid.NewGuid(),Name =  "Product3",Price=300,Stock=30,CreatedDate = DateTime.UtcNow}
            //});
            //var count = await _productWriteRepository.SaveAsync();

            Product p = await _productReadRepository.GetByIdAsync("c9b29733-7f4d-4235-8fe0-b1ed92bc1bb3",false);
            p.Name = "Çamta";
            await _productWriteRepository.SaveAsync();
            
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            Product product = await _productReadRepository.GetByIdAsync(id);
            return Ok(product);
        }
    }
}
