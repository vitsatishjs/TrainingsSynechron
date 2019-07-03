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

public class EurekaClientApp1 {

	@GetMapping(value = "/getdata")
	public String getdata(){
		return "<h1  style='color:blue' >MyData </h1>";
	}
	@GetMapping(value = "/")
	public String getdata1(){
		return "<h1>Entry Point </h1>";
	}

	public static void main(String[] args) {
		SpringApplication.run(EurekaClientApp1.class, args);
	}

	
}
