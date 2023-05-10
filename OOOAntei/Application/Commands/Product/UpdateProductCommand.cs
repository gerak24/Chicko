using OOOAntei.Entitites;

namespace OOOAntei.Application.Commands.Product;

public record UpdateProductCommand(Guid Id, string? Name, string? Description, string? Image, ProductType? Type,
    decimal? Price,
    bool? IsHotOffer);