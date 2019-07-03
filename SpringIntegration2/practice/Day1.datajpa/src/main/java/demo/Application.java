package demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import ch.qos.logback.core.net.SyslogOutputStream;
import model.Dept;
import repo.DeptRepository;

@SpringBootApplication
@EnableJpaRepositories(basePackages="repo")
@EntityScan(basePackages="model")
public class Application {

	@Autowired
	DeptRepository repo;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
		
	}

	@Bean
	public String method1() {

		for (int i = 10; i < 100;i+=10){
			Dept d = new Dept();
			d.setDeptno(i);
			d.setDname("DName" );
			if ((i%20)==0)
				d.setLoc("Hyd");
			else
				d.setLoc("Blr");
			repo.save(d);
		}
		Dept d = new Dept();
		d.setDeptno(10);
		d.setDname("TrainingDept");
		d.setLoc("Pune" );
		repo.save(d);
		
		repo.deleteById(30);
	///	repo.findAll().forEach( (d1)->System.out.println(d1));
		repo.findAll().forEach( System.out::println);
	
		repo.findByLoc("Blr").forEach( System.out::println);
		
		
		repo.findByDname("DName40" ).forEach( System.out::println);
		
		
		repo.findByDnameAndLoc("DName","Hyd").forEach( System.out::println);
		return "success";
	}

}
