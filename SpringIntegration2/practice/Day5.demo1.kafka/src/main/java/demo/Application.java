package demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import demo.producer.Sender;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		ApplicationContext ctx =  SpringApplication.run(Application.class, args);
		Sender sender = ctx.getBean(Sender.class);
		for (int i = 100; i< 112;i++)
		{
			sender.send("mytopic","FromSpringsender4  " +i);
		}
	}
}
