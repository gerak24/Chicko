namespace ChickoBack.Application.Commands.Manager;

public record ChangePassCommand(string OldPassword, string NewPassword);