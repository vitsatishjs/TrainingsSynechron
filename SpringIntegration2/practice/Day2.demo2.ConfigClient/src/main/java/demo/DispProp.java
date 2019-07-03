package demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/")
@RefreshScope
public class DispProp {
	@Value(value="${message:MyDefaultHello}")
	private String msg;

	@GetMapping
	public String disp(){
		return "<h1>Value = " + msg +"</h1>";
	}
}
