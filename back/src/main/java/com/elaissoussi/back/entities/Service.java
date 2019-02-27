package com.elaissoussi.back.entities;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="services")
public class Service {

  @Id
  @GeneratedValue(strategy=GenerationType.TABLE)
  private Long id; 
  
  private String name; 
  
  private String description; 
  
  private BigDecimal price;
  
  @Enumerated(EnumType.STRING)
  private ServiceType serviceType;
  
  @Enumerated(EnumType.STRING)
  private CustomerType customerType;
  
  @JsonIgnore
  @ManyToMany(mappedBy="services", fetch=FetchType.LAZY)
  private Set<Esthetician> estheticians = new HashSet<>(); 
  
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

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public BigDecimal getPrice() {
    return price;
  }

  public void setPrice(BigDecimal price) {
    this.price = price;
  }

  public Set<Esthetician> getEstheticians() {
    return estheticians;
  }

  public void setEstheticians(Set<Esthetician> estheticians) {
    this.estheticians = estheticians;
  }

  public ServiceType getServiceType() {
    return serviceType;
  }

  public void setServiceType(ServiceType serviceType) {
    this.serviceType = serviceType;
  }

  public CustomerType getCustomerType() {
    return customerType;
  }

  public void setCustomerType(CustomerType customerType) {
    this.customerType = customerType;
  }
 
}
