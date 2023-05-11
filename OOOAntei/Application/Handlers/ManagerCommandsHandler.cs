using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
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
        _salt = configuration["Salt"] ?? throw new BusinessException("В конфигурации не задана соль для паролей");
        _owner = configuration["OwnerLogin"] ?? throw new BusinessException("В конфигурации не задан логин суперадмина");
    }
    private readonly string _salt;
    private readonly string _owner;
    private DataContext DbContext { get; }

    public async Task<string> RegisterAsync(Guid userId, RegisterManagerCommand cmd)
    {
        var user = await DbContext.Managers.FirstOrDefaultAsync(x => x.Id == userId) ?? throw new EntityNotFoundException();
        if (user.Login != _owner) throw new BusinessException("У вас нет прав регестрировать новых сотрудников");
        var passHash = Hasher.Create(cmd.Password, _salt);
        if (DbContext.Managers.Any(x => x.Login == cmd.Login))
            throw new BusinessException("Работник с таким логином уже существует");
        await DbContext.Managers.AddAsync(new Manager(Guid.NewGuid(), cmd.Login, passHash));
        await DbContext.SaveChangesAsync();
        return "Account registered";
    }

    public async Task<string> AuthorizeAsync(AuthorizationCommand cmd)
    {
        var user = await DbContext.Managers.FirstOrDefaultAsync(x => x.Login == cmd.Login);
        if (user == null) throw new BusinessException("Пользователя с таким логином не существует");
        if (!Hasher.Validate(cmd.Password, _salt, user.PassHash)) throw new BusinessException("Пароль не верен");
        return GetToken(user);
    }

    public async Task<string> ChangePasswordAsync(string? userId, ChangePassCommand cmd)
    {
        var id = Guid.Parse(userId ?? throw new BusinessException("Возникли проблемы авторизации"));
        var user = DbContext.Managers.FirstOrDefault(x => x.Id == id) ?? throw new EntityNotFoundException("Возникли проблемы авторизации");
        if (!Hasher.Validate(cmd.OldPassword, _salt, user.PassHash))
            throw new BusinessException("Указан неверный старый пароль");

        user.PassHash = Hasher.Create(cmd.NewPassword, _salt);
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