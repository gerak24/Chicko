using OOOAntei.Entitites.Orders;

namespace OOOAntei.Application.Commands.Order;

public record CreateOrderCommand(IEnumerable<OrderProduct> Products, string Customer, string Contact);