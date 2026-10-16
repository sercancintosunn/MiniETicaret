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
       
        

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok("Merhaba");
        }

    }
}
