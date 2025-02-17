using ChickoBack.Entitites;

namespace ChickoBack.Application.Commands.Product;

public record CreateProductCommand(string Name, string Description, string Image, ProductType Type, decimal Price,
    bool IsHotOffer);