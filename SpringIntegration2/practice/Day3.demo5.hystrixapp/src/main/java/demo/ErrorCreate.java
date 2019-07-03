package demo;

import java.net.URL;


public class ErrorCreate {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
	for(int i  = 0; i< 500;i++)
	{
		URL url = new URL("http://localhost:8080/");
		url.getContent();
		URL url1 = new URL("http://localhost:8080/abc");
		url1.getContent();
		Thread.sleep(500);
	}

}
}
