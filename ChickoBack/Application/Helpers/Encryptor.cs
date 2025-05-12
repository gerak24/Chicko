using System.Security.Cryptography;
using System.Text;

namespace ChickoBack.Application.Helpers;

public class Encryptor
{
    public static string EncryptString_Aes(string plainText, byte[] Key, byte[] IV)
    {
        using var aesAlg = Aes.Create();
        aesAlg.Key = Key;
        aesAlg.IV = IV;

        var encryptor = aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV);

        using var msEncrypt = new MemoryStream();
        using var csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write);
        using (var swEncrypt = new StreamWriter(csEncrypt))
        {
            swEncrypt.Write(plainText);
        }

        var encrypted = msEncrypt.ToArray();

        return BitConverter.ToString(encrypted);
    }

    public static string DecryptString_Aes(string cipherText, byte[] key, byte[] iv)
    {
        var data = Encoding.UTF8.GetBytes(cipherText);

        using var aesAlg = Aes.Create();
        aesAlg.Key = key;
        aesAlg.IV = iv;

        var decryptor = aesAlg.CreateDecryptor(aesAlg.Key, aesAlg.IV);

        using var msDecrypt = new MemoryStream(data);
        using var csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read);
        using var srDecrypt = new StreamReader(csDecrypt);

        var plaintext = srDecrypt.ReadToEnd();

        return plaintext;
    }
}