namespace ChickoBack.Application.Commands.Product;

public record DeleteProductCommand(Guid Id, bool IsSoftDelete);