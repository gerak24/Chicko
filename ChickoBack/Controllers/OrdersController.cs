using ChickoBack.Application.Commands.Order;
using ChickoBack.Application.Handlers;
using ChickoBack.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ChickoBack.Controllers;

[Authorize]
public class OrdersController(DataContext dbContext, IConfiguration configuration) : ApiController
{
    private OrderCommandsHandler Handler { get; } = new(dbContext, configuration);

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
    
    
    [HttpGet("{orderId:guid}")]
    [AllowAnonymous]
    public IActionResult GetOrder(Guid orderId)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(Handler.GetOrder(orderId));
    }
}