package demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
@Configuration
public class MySecurity extends WebSecurityConfigurerAdapter
{
	
	 @Override
	    protected void configure(HttpSecurity http) throws Exception {
		 http.antMatcher("/admin/**").authorizeRequests()
		 .anyRequest().authenticated().and()
		 .httpBasic();
		
	/*        http
	            .authorizeRequests()
	                .antMatchers("/*", "/index.html").permitAll()
	                .antMatchers("/admin/*").authenticated()
	                .and()
	            .formLogin()
	                .permitAll()
	                .and()
	            .logout()
	                .permitAll();
	  */   
	    }

	    @Bean
	    @Override
	    public UserDetailsService userDetailsService() {
	        UserDetails user =
	             User.withDefaultPasswordEncoder().username("user1").password("pass1").roles("std").build();
	        return new InMemoryUserDetailsManager(user);
	    }
}
