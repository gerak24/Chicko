using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace OOOAntei.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class ApiController : Controller
{
    
}