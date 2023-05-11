using System.Text.Json.Serialization;

namespace OOOAntei.Entitites;
[JsonConverter(typeof(JsonStringEnumConverter))]
public enum ProductType
{
    Services,
    Products
}