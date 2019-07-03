package demo;

import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Component;

@Component
public class BusinessLogic {
	public void m0(){
		System.out.println("m0 invoked ... Method with no security ");
	}
	@Secured(value="ROLE_std")
	public void m1(){
		System.out.println("m1 invoked ...method can be invoked by user in std role");
	}
	@Secured(value="ROLE_adm")
	public void m2(){
		System.out.println("m2 invoked ...method can be invoked by user in adm role");
	}
}
