using ChickoBack.Application.Commands.Manager;
using ChickoBack.Application.Commands.Product;
using ChickoBack.Application.Handlers;
using ChickoBack.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ChickoBack.Controllers;

[Authorize]
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
    public IActionResult GetText()
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        Thread.Sleep(7000);
        return Ok(new
        {
            text1 = "ВРЕМЯ РАБОТЫ: Ежедневно \n с 12.00 до 22.00",
            text2 = "Chicko - Вкус Кореи \n  +7(863) 301 - 35 - 00",
        });
    }

    [HttpPost("[action]")]
    [AllowAnonymous]
    public IActionResult Hello(HelloCommand command)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        if (command.Password != "Hello")
            throw new BusinessException("Not hello -_-");

        return Ok("O, hello");
    }

    [HttpPost("[action]")]
    [AllowAnonymous]
    public IActionResult Auth(AuthorizationCommand command)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        if (command.Password != "admin" || command.Login != "admin")
            return Unauthorized("Not authorized -_____-");

        return Ok("O, hello");
    }

    [HttpGet("[action]")]
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