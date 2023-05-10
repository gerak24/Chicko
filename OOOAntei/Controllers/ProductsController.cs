using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OOOAntei.Application.Handlers;
using OOOAntei.Data;

namespace OOOAntei.Controllers;

public class ProductsController : ApiController
{

    public ProductsController(DataContext dbContext, IConfiguration configuration)
    {
        Handler = new ProductCommandsHandler(dbContext, configuration);
    }

    private ProductCommandsHandler Handler { get; }
    
    [HttpGet]
    [AllowAnonymous]
    public IActionResult GetProducts()
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(Handler.GetProducts());
    }
    
    [HttpPost]
    public IActionResult SaveProduct()
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(Handler.GetProducts());
    }

}