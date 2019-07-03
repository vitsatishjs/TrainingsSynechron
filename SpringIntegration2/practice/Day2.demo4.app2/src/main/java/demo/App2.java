package demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@RestController
public class App2 {

	@GetMapping(value = "/myapp")
	public String getdata(){
		return "<h1  style='color:green' >MyData </h1>";
	}

	public static void main(String[] args) {
		SpringApplication.run(App2.class, args);
	}

	
}
