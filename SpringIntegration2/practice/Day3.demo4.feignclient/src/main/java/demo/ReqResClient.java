package demo;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(name="demo2", url="https://reqres.in/api")
public interface ReqResClient {
	@RequestMapping(method=RequestMethod.GET, value = "/users?page=1")
	public Wrapper  getdata();
}
