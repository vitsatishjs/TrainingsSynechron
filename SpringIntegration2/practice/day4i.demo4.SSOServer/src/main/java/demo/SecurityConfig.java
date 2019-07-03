package demo;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

@Configuration
@EnableResourceServer
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private AuthenticationManager authenticationManager;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.requestMatchers().antMatchers("/login","/oauth/authorize")
		.and()
		.authorizeRequests()
		.anyRequest()
		.authenticated()
		.and()
		.formLogin()
		.permitAll();
	}
 @Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	 auth.parentAuthenticationManager(authenticationManager)
	 .inMemoryAuthentication()
	 .withUser("user1").password("pass1").roles("user").and()
	  .withUser("user2").password("pass2").roles("user");
}
 
}
