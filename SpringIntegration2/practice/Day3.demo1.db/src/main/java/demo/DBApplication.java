package demo;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@EnableJpaRepositories()
@EntityScan()
@RestController
public class DBApplication {
	@Autowired
	DeptRepository repo;

	@GetMapping(value = "/")
	public String index() {
		System.out.println("in index of Db" + new Date());
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "<h1><a href='depts'>List Departments</a></h1>";
	}

	@GetMapping(value = "/depts", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Dept> findall() {
		if (new Date().getTime() %2 ==0 )
		{
			try {
				Thread.sleep(8000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		else
		{
			System.out.println(" in run time exception");
			throw new RuntimeException("Eroror ");
		}
		return repo.findAll();
	}
	public static void main(String[] args) {
		SpringApplication.run(DBApplication.class, args);
	}

	@Bean
	public String method1() {

		for (int i = 10; i < 60; i += 10) {
			Dept d = new Dept();
			d.setDeptno(i);
			d.setDname("DName");
			if ((i % 20) == 0)
				d.setLoc("Hyd");
			else
				d.setLoc("Blr");
			repo.save(d);
		}
		return "s";
	}
}
