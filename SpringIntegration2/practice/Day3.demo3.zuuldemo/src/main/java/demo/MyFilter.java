package demo;

import java.util.Date;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.exception.ZuulException;

public class MyFilter extends ZuulFilter 
{

	@Override
	public Object run() throws ZuulException {
		// TODO Auto-generated method stub
		System.out.println("Run Invoked ." + new Date());
	// logic 
		return null;
	}

	@Override
	public boolean shouldFilter() {
		// TODO Auto-generated method stub
		System.out.println("Should Filter invoked ");
		return true;
	}

	@Override
	public int filterOrder() {
		// TODO Auto-generated method stub
		System.out.println("filter Order invoked ");
		return 0;
	}

	@Override
	public String filterType() {
		// TODO Auto-generated method stub
		System.out.println("FilterType invoked ");
		return "pre";
	}

}
