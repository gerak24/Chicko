namespace ChickoBack.Entitites;

public class Manager(Guid id, string login, string passHash) : Entity(id)
{
    public string Login { get; set; } = login;
    public string PassHash { get; set; } = passHash;
}