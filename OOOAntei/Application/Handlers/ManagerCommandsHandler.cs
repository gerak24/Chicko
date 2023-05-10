using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OOOAntei.Application.Commands;
using OOOAntei.Application.Commands.Manager;
using OOOAntei.Application.Helpers;
using OOOAntei.Data;
using OOOAntei.Data.AuthConfiguration;
using OOOAntei.Entitites;

namespace OOOAntei.Application.Handlers;

public class ManagerCommandsHandler
{
    public ManagerCommandsHandler(DataContext dbContext, IConfiguration configuration)
    {
        DbContext = dbContext;
        Salt = configuration["Salt"] ?? throw new NotImplementedException();
    }

    private string Salt { get; }
    private DataContext DbContext { get; }

    public async Task<string> RegisterAsync(RegisterManagerCommand cmd)
    {
        var passHash = Hasher.Create(cmd.Password, Salt);
        if (DbContext.Managers.Any(x => x.Login == cmd.Login))
            throw new NotImplementedException();
        await DbContext.Managers.AddAsync(new Manager(Guid.NewGuid(), cmd.Login, passHash));
        await DbContext.SaveChangesAsync();
        return "Account registered";
    }

    public async Task<string> AuthorizeAsync(AuthorizationCommand cmd)
    {
        var user = await DbContext.Managers.FirstOrDefaultAsync(x => x.Login == cmd.Login);
        if (user == null) throw new NotImplementedException();
        if (!Hasher.Validate(cmd.Password, Salt, user.PassHash)) throw new NotImplementedException();
        return GetToken(user);
    }

    public async Task<string> ChangePasswordAsync(string? userId, ChangePassCommand cmd)
    {
        var id = Guid.Parse(userId ?? throw new NotImplementedException());
        var user = DbContext.Managers.FirstOrDefault(x => x.Id == id) ?? throw new NotImplementedException();
        if (!Hasher.Validate(cmd.OldPassword, Salt, user.PassHash))
            throw new NotImplementedException();

        user.PassHash = Hasher.Create(cmd.NewPassword, Salt);
        DbContext.Managers.Update(user);
        await DbContext.SaveChangesAsync();
        return "Password changed";
    }

    private string GetToken(Manager account)
    {
        var claims = new[]
        {
            new Claim(ClaimsIdentity.DefaultNameClaimType, account.Id.ToString())
        };
        var identity = new ClaimsIdentity(claims, "Token");
        var now = DateTime.UtcNow;
        var sCred = new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256);
        var jwt = new JwtSecurityToken(
            issuer: AuthOptions.Issuer,
            audience: AuthOptions.Audience,
            notBefore: now,
            claims: identity.Claims,
            expires: now.Add(TimeSpan.FromMinutes(AuthOptions.Lifetime)),
            signingCredentials: sCred);

        return new JwtSecurityTokenHandler().WriteToken(jwt);
    }
}