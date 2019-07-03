package repo;

import org.springframework.data.repository.CrudRepository;

import model.Dept;

public interface DeptRepository extends CrudRepository<Dept,Integer> {
	public Iterable<Dept> findByLoc(String loc);
	public Iterable<Dept> findByDname(String dname);
	//findByLastnameAndFirstname
	public Iterable<Dept> findByDnameAndLoc(String dname, String loc);
}
