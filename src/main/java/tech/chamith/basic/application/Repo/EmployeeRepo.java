package tech.chamith.basic.application.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.chamith.basic.application.Model.Employee;

import java.util.Optional;


public interface EmployeeRepo extends JpaRepository<Employee,Long> {


    Optional<Employee> findEmployeeById(Long id);
}