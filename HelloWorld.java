//*******************************************************************
// Welcome to CompileJava!
// If you experience any issues, please contact us ('More Info')  -->
//*******************************************************************

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class HelloWorld
{
  public static String ordenarData(final String data) {
    String dataOrdenada = "";
    try {
      for (int i = data.length()-1; i >= 0; i--) { 
        dataOrdenada += data.charAt(i); 
      } 
      return dataOrdenada;
    } catch(Exception e) {
      System.out.println("ocorreu um problema: " + e);
  }
    return dataOrdenada;
}
  public static void validIntegrityForData(final String data, final String compare) {
  try {
       final MessageDigest algorithm = MessageDigest.getInstance("SHA1");
       byte messageDigest[] = algorithm.digest(data.getBytes("UTF8"));
         
       StringBuilder hexString = new StringBuilder();
       for (byte b : messageDigest) {
         hexString.append(String.format("%02X", 0xFF & b));
       }
       String senhahex = hexString.toString();
      
       System.out.println(senhahex);
        
       System.out.println(senhahex.charAt(senhahex.length()-1));
    
       System.out.println("A hash: "+senhahex+" é igual a hash: "+compare+" ? R.:"+senhahex.equals(compare.toUpperCase()));
    
  } catch(Exception e) {
      System.out.println("ocorreu um problema: " + e);
  }
  }
  
  public static void main(String[] args)
  {
    try {
      final String parte1 = "0f00a5cb26a9d0083ae5f5";
      final String parte2 = "0ff85bd5dac9ecebbd9578";
      final String hash = ordenarData(parte1.substring(2, parte1.length())).concat(ordenarData(parte2.substring(2, parte2.length())));
      validIntegrityForData("alma", hash);
      
      final String p = "pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7q=0.0f00a5cb26a9d0083ae5f5";
      
      System.out.println(p.substring(p.indexOf("q=0.0f"), p.length()));
    } catch(Exception e) {
      System.out.println("ocorreu um problema: " + e);
  }
}
}



