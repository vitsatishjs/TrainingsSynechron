package demo ;

import javax.sql.DataSource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.context.SecurityContextImpl;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.JdbcUserDetailsManager;

import ch.qos.logback.core.db.DriverManagerConnectionSource;

@SpringBootApplication
@EnableGlobalMethodSecurity(prePostEnabled=true, securedEnabled=true)
public class SecurityApplication1 {
	@Bean
	public UserDetailsService userDetailsService() throws Exception {
	    // ensure the passwords are encoded properly
		/*  UserBuilder users = User.withDefaultPasswordEncoder();
	    InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
	    manager.createUser(users.username("user1").password("pass1").roles("std").build());
	    manager.createUser(users.username("user2").password("pass2").roles("adm").build());
	    manager.createUser(users.username("user3").password("pass3").roles("std","adm").build());
	   */
	    JdbcUserDetailsManager manager = new JdbcUserDetailsManager(ds());
	   manager.setUsersByUsernameQuery("select username, password, enabled from users where username = ?");
	   manager.setAuthoritiesByUsernameQuery("select username, authority from authorities where username = ?");
	    return manager;
	    
	}
	@Bean
	public DataSource ds(){
		return new DriverManagerDataSource("jdbc:hsqldb:hsql://localhost/","SA","");
	}
	
	public static void main(String[] args) {
		ConfigurableApplicationContext ctx = SpringApplication.run(SecurityApplication1.class, args);
		BusinessLogic bl = ctx.getBean(BusinessLogic.class);
		
		SecurityContext seccontext = new SecurityContextImpl();
		Authentication auth = new UsernamePasswordAuthenticationToken("user5", "pass5");
		seccontext.setAuthentication(auth);
		SecurityContextHolder.setContext(seccontext);
		
		bl.m0();
		try {
			bl.m1();
		} catch (Exception e) {
			System.out.println("m1 can't be invoked .." + e.getMessage());
		} 
		
		try {
			bl.m2();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("m2 can't be invoked .." + e.getMessage());
		}
	}
}
