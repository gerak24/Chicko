namespace OOOAntei.Entitites;

public class Manager : Entity
{
    public Manager(Guid id, string login, string passHash):base(id)
    {
        Login = login;
        PassHash = passHash;
    }

    public string Login { get; protected set; }
    public string PassHash { get; protected internal set; }
}