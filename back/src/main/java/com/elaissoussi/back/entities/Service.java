package com.elaissoussi.back.entities;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="services")
public class Service {

  @Id
  @GeneratedValue(strategy=GenerationType.TABLE)
  private Long id; 
  
  private String name; 
  
  private String description; 
  
  private BigDecimal price;
  
  @ManyToMany(mappedBy="services")
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
}
