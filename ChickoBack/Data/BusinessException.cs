namespace ChickoBack.Data;

public class BusinessException : Exception
{
    public BusinessException(string message) : base(message)
    {
    }
}