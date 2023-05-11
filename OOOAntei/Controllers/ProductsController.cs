using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OOOAntei.Application.Commands.Product;
using OOOAntei.Application.Handlers;
using OOOAntei.Data;

namespace OOOAntei.Controllers;

public class ProductsController : ApiController
{
    public ProductsController(DataContext dbContext)
    {
        Handler = new ProductCommandsHandler(dbContext);
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

    [HttpGet("[action]")]
    [AllowAnonymous]
    public IActionResult GetDeleted()
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(Handler.GetDeletedProducts());
    }

    [HttpPost]
    public async Task<IActionResult> SaveProduct(CreateProductCommand cmd)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(await Handler.CreateProduct(cmd));
    }

    [HttpPut]
    public async Task<IActionResult> UpdateProduct(UpdateProductCommand cmd)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(await Handler.UpdateProduct(cmd));
    }

    [HttpDelete]
    public async Task<IActionResult> DeleteProduct(DeleteProductCommand cmd)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(await Handler.DeleteProduct(cmd));
    }
}