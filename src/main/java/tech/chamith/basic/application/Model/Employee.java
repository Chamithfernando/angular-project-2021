package tech.chamith.basic.application.Model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Employee implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false ,updatable = false)
    private Long id;
    private String name;
    private String email;
    private String jobtitle;
    private String phone;
    @Column(nullable = false, updatable = true)
    private String imagersURL;
    private String employeeCode;


    public Employee() {
    }

    public Employee(Long id, String name, String email, String jobtitle, String phone, String imagersURL, String employeeCode) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.jobtitle = jobtitle;
        this.phone = phone;
        this.imagersURL = imagersURL;
        this.employeeCode = employeeCode;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJobtitle() {
        return jobtitle;
    }

    public void setJobtitle(String jobtitle) {
        this.jobtitle = jobtitle;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImagersURL() {
        return imagersURL;
    }

    public void setImagersURL(String imagersURL) {
        this.imagersURL = imagersURL;
    }

    public String getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(String employeeCode) {
        this.employeeCode = employeeCode;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", jobtitle='" + jobtitle + '\'' +
                ", phone='" + phone + '\'' +
                ", imagersURL='" + imagersURL + '\'' +
                ", employeeCode='" + employeeCode + '\'' +
                '}';
    }
}
