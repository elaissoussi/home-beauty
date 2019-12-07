package com.elaissoussi.back.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="orderentries")
public class OrderEntry {
  
  @Id
  @GeneratedValue(strategy=GenerationType.TABLE)
  private Long id;
  
  @OneToOne
  private Service service; 
  
  private int quantity;
  
  @JsonIgnore
  @ManyToOne(fetch=FetchType.LAZY)
  private Cart cart; 
  
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Service getService() {
    return service;
  }

  public void setService(Service service) {
    this.service = service;
  }

  public int getQuantity() {
    return quantity;
  }

  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }

  public Cart getCart() {
    return cart;
  }

  public void setCart(Cart cart) {
    this.cart = cart;
  }
}
