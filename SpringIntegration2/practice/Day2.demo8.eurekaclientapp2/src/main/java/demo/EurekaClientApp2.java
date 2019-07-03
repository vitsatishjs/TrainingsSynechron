package demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

import org.springframework.cloud.client.loadbalancer.LoadBalanced;

import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableEurekaClient
//@EnableDiscoveryClient
@RestController(value="/")
public class EurekaClientApp2 {

	public static void main(String[] args) {
		SpringApplication.run(EurekaClientApp2.class, args);
	}
	@Autowired
	private RestTemplate template;
	
	@Bean
	@LoadBalanced
	public RestTemplate rest(){
		return new RestTemplate();
	}
	@GetMapping
	public String data()
	{
	
		String s = template.getForEntity("http://app/getdata",String.class).getBody();
		System.out.println(s);
		return "<h2>In RibbonClient App</h2> " + s;
	}
}
