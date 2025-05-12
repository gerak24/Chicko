using ChickoBack.Application.Commands.Product;
using ChickoBack.Application.Handlers;
using ChickoBack.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ChickoBack.Controllers;

public class ProductsController(DataContext dbContext) : ApiController
{
    private ProductCommandsHandler Handler { get; } = new(dbContext);

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