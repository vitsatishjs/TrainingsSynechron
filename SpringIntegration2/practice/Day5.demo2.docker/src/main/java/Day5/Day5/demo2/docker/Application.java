package Day5.Day5.demo2.docker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	@RequestMapping(method=RequestMethod.GET)
    public String defaultmethod() {
		return "<h1>In defaultmethod  of Application1  ...</h1>"
				+ "<h1><a href='/my/m1'>Link1 - m1</a></h1>"
				+ "<h1><a href='/my/m2'>Link2 - m2</a></h1>";
    }
	@GetMapping(value="/my/m1")
    public String m1() {
		return "<h1>In  m1  of my - MyController   ...</h1>";
    }
	@GetMapping(value="/my/m2")
    public String m2() {
		return "<h1>In m2 of MyController  ...</h1>";
    }

}
