package tech.chamith.basic.application.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tech.chamith.basic.application.Model.Employee;
import tech.chamith.basic.application.Service.EmployeeService;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/empoloyee")
public class EmpoyeeControler {

    @Autowired
    private EmployeeService employeeService;


    @GetMapping("/all")
    public ResponseEntity<List<Employee>> findallEmployee(){
        List<Employee> allEmployees = employeeService.findAllById();
        return new ResponseEntity<>(allEmployees, HttpStatus.OK);
    }

    @GetMapping("/all/{id}")
    public ResponseEntity<?> getAllEmployeeById(@PathVariable Long id){
        Optional<Employee> allEmployees = Optional.ofNullable(employeeService.findEmployeeById(id));
        return allEmployees.map(response -> ResponseEntity.ok().body(response)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

      @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody  Employee employee){
        Employee employee1 = employeeService.addEmployee(employee);
        return new ResponseEntity<>(employee1,HttpStatus.CREATED);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Employee> updateEmployee(@Validated @RequestBody  Employee employee){
        Employee employee1 = employeeService.updateEmployee(employee);
        return new ResponseEntity<>(employee1,HttpStatus.CREATED);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
