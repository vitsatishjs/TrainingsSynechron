package demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication()
@RestController
public class Application1 {

	public static void main(String[] args) {
		SpringApplication.run(Application1.class, args);
	}
	@RequestMapping(method=RequestMethod.GET)
    public String defaultmethod() {
		return "<h1>In defaultmethod  of Application1  ...</h1>"
				+ "<h1><a href='my/m1'>Link1 - m1</a></h1>"
				+ "<h1><a href='my/m2'>Link2 - m2</a></h1>"
				+ "<h1><a href='my/user'>Link3 -User Details</a></h1>";
    }

	@Component
	@EnableOAuth2Sso
	public static class LoginConfigurer extends WebSecurityConfigurerAdapter {

		@Override
		public void configure(HttpSecurity http) throws Exception {
			http.antMatcher("/my/**").authorizeRequests()
			.anyRequest()	.authenticated().and()
					.logout().logoutUrl("/my/logout").permitAll()
					.logoutSuccessUrl("/");
		}

	
	}
}
