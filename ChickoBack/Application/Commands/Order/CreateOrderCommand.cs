using ChickoBack.Entitites.Orders;

namespace ChickoBack.Application.Commands.Order;

public record CreateOrderCommand(IEnumerable<OrderProduct> Products, string Customer, string Contact, string? Comment);