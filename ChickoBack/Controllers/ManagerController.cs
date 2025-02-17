using ChickoBack.Application.Commands.Manager;
using ChickoBack.Application.Handlers;
using ChickoBack.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ChickoBack.Controllers;

public class ManagerController : ApiController
{
    public ManagerController(DataContext dbContext, IConfiguration configuration)
    {
        Handler = new ManagerCommandsHandler(dbContext, configuration);
    }

    private ManagerCommandsHandler Handler { get; }

    [HttpPost("[action]")]
    public async Task<IActionResult> Register(RegisterManagerCommand cmd)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var userId = Guid.Parse(HttpContext.User.Identity?.Name ?? throw new BusinessException("Возникли проблемы авторизации"));
        return Ok(await Handler.RegisterAsync(userId, cmd));
    }

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> Authorize(AuthorizationCommand cmd)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(await Handler.AuthorizeAsync(cmd));
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> ChangePassword(ChangePassCommand cmd)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var userId = HttpContext.User.Identity?.Name;
        return Ok(await Handler.ChangePasswordAsync(userId, cmd));
    }
}