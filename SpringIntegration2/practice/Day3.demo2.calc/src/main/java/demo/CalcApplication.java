package demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class CalcApplication {

	public static void main(String[] args) {
		SpringApplication.run(CalcApplication.class, args);
	}
	@GetMapping
	public String hello(){
		
		return "<h1>In Calc</h1><h1><a href='add'>Add</a></h1>";
		
	}
	@GetMapping(value="/add")
	public String add(){
		
		return "<h1>Addition</h1>";
		
	}
}
