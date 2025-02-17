using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ChickoBack.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class ApiController : Controller
{
    
}