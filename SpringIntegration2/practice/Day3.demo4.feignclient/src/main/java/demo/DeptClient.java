package demo;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(name="demo1", url="http://localhost:9090/")
public interface DeptClient {

	@RequestMapping(method=RequestMethod.GET, value = "/depts")
	public List<Dept> findall();
	
}
