package demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

@SpringBootApplication
@RestController
@EnableCircuitBreaker // show circuites
@EnableHystrix // + actuator -> http://localhost:8080/actuator/hystrix.stream
@EnableHystrixDashboard  // http://localhost:8080/hystrix
public class HystrixApp {

	public static void main(String[] args) {
		SpringApplication.run(HystrixApp.class, args);
	}
	@GetMapping(value="/")
	@HystrixCommand(commandKey="demo1", groupKey="db",fallbackMethod="method1")
	public Object[] get(){
		System.out.println("actual method");
		RestTemplate  resttemplate = new RestTemplate();
		ResponseEntity<Object[]> re = resttemplate.getForEntity("http://localhost:9090/depts", Object[].class);
		//System.out.println(re.getBody());
		return re.getBody();
	}
	
	@GetMapping(value="/abc")
	@HystrixCommand(commandKey="demo2", groupKey="db1",fallbackMethod="method1")
	public Object[] get1(){
		System.out.println("actual method");
		RestTemplate  resttemplate = new RestTemplate();
		ResponseEntity<Object[]> re = resttemplate.getForEntity("http://localhost:9090/depts", Object[].class);
		//System.out.println(re.getBody());
		return re.getBody();
	}
	
	
	public Object[] method1(){
		System.out.println("------------Fallback method ");
		String[] arr = {"static data","simple data "};
		return arr;
	}
	
}
