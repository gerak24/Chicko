using System.Text.Json.Serialization;

namespace ChickoBack.Entitites;
[JsonConverter(typeof(JsonStringEnumConverter))]
public enum ProductType
{
    Services,
    Products
}