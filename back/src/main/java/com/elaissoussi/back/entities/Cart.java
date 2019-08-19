package com.elaissoussi.back.entities;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="carts")
public class Cart {
  
  @Id
  @GeneratedValue(strategy=GenerationType.TABLE)
  private Long id;
  
  @JsonIgnore
  @OneToOne
  private Customer customer; 
  
  @OneToMany(mappedBy="cart", 
             cascade=CascadeType.ALL,
             fetch=FetchType.LAZY)
  private List<CartEntry> entries;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Customer getCustomer() {
    return customer;
  }

  public void setCustomer(Customer customer) {
    this.customer = customer;
  }

  public List<CartEntry> getEntries() {
    return entries;
  }

  public void setEntries(List<CartEntry> entries) {
    this.entries = entries;
  }
}
