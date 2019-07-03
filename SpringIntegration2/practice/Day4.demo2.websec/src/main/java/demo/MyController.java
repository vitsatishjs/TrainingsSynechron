package demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {
	@GetMapping(value="/m1")
	public String m1(){
		return " <h1>In m1</h1><a href='/index.html' >Home</a>" ;
	}
	
	@GetMapping(value="/admin/m1")
	public String m2(){
		return " <h1>In ADMIN m1</h1><a href='/index.html' >Home</a>" ;
	}
	@GetMapping(value="/admin/m2")
	public String m3(){
		return " <h1>In ADMIN m1</h1><a href='/index.html' >Home</a>" ;
	}
	
}
