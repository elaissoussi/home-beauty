package com.elaissoussi.back.entities;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Inheritance(strategy =InheritanceType.TABLE_PER_CLASS )
public class User {
  
    @Id
    @GeneratedValue(strategy=GenerationType.TABLE)
    private Long id; 
    
    private String email;
    
    private String password; 
    
    private String firstName;
    private String lastName;
    
    private String phoneNumber;
    
    @JsonIgnore
    @OneToMany(mappedBy="user" , 
               cascade = CascadeType.ALL,
               fetch=FetchType.LAZY)
    private Set<Address> addresses = new HashSet<>();
    
    public Long getId() {
      return id;
    }
    public void setId(Long id) {
      this.id = id;
    }
    public String getEmail() {
      return email;
    }
    public void setEmail(String email) {
      this.email = email;
    }
    public String getPassword() {
      return password;
    }
    public void setPassword(String password) {
      this.password = password;
    }
    public String getFirstName() {
      return firstName;
    }
    public void setFirstName(String firstName) {
      this.firstName = firstName;
    }
    public String getLastName() {
      return lastName;
    }
    public void setLastName(String lastName) {
      this.lastName = lastName;
    }
    public String getPhoneNumber() {
      return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
      this.phoneNumber = phoneNumber;
    }
    public Set<Address> getAddresses() {
      return addresses;
    }
    public void setAddresses(Set<Address> addresses) {
      this.addresses = addresses;
    }
}
