package hello;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.Dept;
import demo.DeptClient;
import demo.ReqResClient;
import demo.User;
import demo.Wrapper;
import feign.RequestInterceptor;
import feign.RequestTemplate;

@EnableFeignClients(basePackages="demo")
@SpringBootApplication(scanBasePackages="demo")
@RestController
@RequestMapping(value="/")
public class FiegnClientApp{
	@Autowired
	DeptClient dclient;
	@Autowired
	ReqResClient reqclient;
	public static void main(String[] args) {
		SpringApplication.run(FiegnClientApp.class, args);
	}
	@GetMapping
	public String list(){
		List<Dept> depts = dclient.findall();
		System.out.println(depts);
		return "<h1>list</h1>";
	}
	
	@Bean
	public RequestInterceptor requestint(){
		return new RequestInterceptor() {
			
			@Override
			public void apply(RequestTemplate requesttemplate) {
				requesttemplate.header("user-agent", "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36" );
			}
		};
	}

	@GetMapping(value="req")
	public String listreq(){
		Wrapper pagedetails  = reqclient.getdata();
		String str= "<h1>Page = "  + pagedetails.getPage() + "</h1>";
		str += pagedetails.toString();
		
		str += "<table border='1' bgcolor='cyan'>";
		List<User> list = pagedetails.getData();
		for (int i = 0; i< list.size();i++)
		{
			str+= "<tr><td>" + list.get(i).getId()  +  "</td><td>"
					+ list.get(i).getFirst_name() + "</td><td>"
					+ list.get(i).getLast_name()  +  "</td><td>" 
					+list.get(i).getId()  +  "</td><td>"
					+ "<img src='" + list.get(i).getAvatar() + "'/></td></tr>";
		}
		str+= "</table>";
		System.out.println(str);
		return str;
	}

}
