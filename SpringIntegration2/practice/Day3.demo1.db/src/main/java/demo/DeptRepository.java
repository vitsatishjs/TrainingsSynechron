package demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;


public interface DeptRepository extends JpaRepository<Dept,Integer> {
	
}
