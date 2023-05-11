using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OOOAntei.Application.Commands.Order;
using OOOAntei.Application.Handlers;
using OOOAntei.Data;

namespace OOOAntei.Controllers;

public class OrdersController : ApiController
{
    public OrdersController(DataContext dbContext)
    {
        Handler = new OrderCommandsHandler(dbContext);
    }

    private OrderCommandsHandler Handler { get; }

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> CreateOrder(CreateOrderCommand cmd)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(await Handler.Create(cmd));
    }

    [HttpGet]
    public IActionResult GetOrders()
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(Handler.GetOrders());
    }
}