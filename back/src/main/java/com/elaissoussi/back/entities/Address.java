package com.elaissoussi.back.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="addresses")
public class Address {
  
  @Id
  @GeneratedValue(strategy=GenerationType.TABLE)
  private Long id;
  
  private int zipCode;
  private String street;
  private String city ;
  
  @ManyToOne(fetch=FetchType.LAZY)
  private User user;
  
  public int getZipCode() {
    return zipCode;
  }
  public void setZipCode(int zipCode) {
    this.zipCode = zipCode;
  }
  public String getCity() {
    return city;
  }
  public void setCity(String city) {
    this.city = city;
  }
  public String getStreet() {
    return street;
  }
  public void setStreet(String street) {
    this.street = street;
  }
  public User getUser() {
    return user;
  }
  public void setUser(User user) {
    this.user = user;
  } 
  
}
