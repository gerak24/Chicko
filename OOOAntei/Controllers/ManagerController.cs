using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OOOAntei.Application.Commands.Manager;
using OOOAntei.Application.Handlers;
using OOOAntei.Data;

namespace OOOAntei.Controllers;

public class ManagerController : ApiController
{
    public ManagerController(DataContext dbContext, IConfiguration configuration)
    {
        Handler = new ManagerCommandsHandler(dbContext, configuration);
    }

    private ManagerCommandsHandler Handler { get; }

    [HttpPost("[action]")]
    [AllowAnonymous]
    public async Task<IActionResult> Register(RegisterManagerCommand cmd)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(await Handler.RegisterAsync(cmd));
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