package com.elaissoussi.back.entities;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//@Entity
public class Review {
  
  //@Id
  //@GeneratedValue(strategy=GenerationType.TABLE)
  private Long id;
  
  private Esthetician esthetician; 
  private Customer customer; 
  
  private int rating; 
  private String title;
  private String description;
  private Date date;
  
  
  public Long getId() {
    return id;
  }
  public void setId(Long id) {
    this.id = id;
  }
  public Esthetician getEsthetician() {
    return esthetician;
  }
  public void setEsthetician(Esthetician esthetician) {
    this.esthetician = esthetician;
  }
  public Customer getCustomer() {
    return customer;
  }
  public void setCustomer(Customer customer) {
    this.customer = customer;
  }
  public int getRating() {
    return rating;
  }
  public void setRating(int rating) {
    this.rating = rating;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getDescription() {
    return description;
  }
  public void setDescription(String description) {
    this.description = description;
  }
  public Date getDate() {
    return date;
  }
  public void setDate(Date date) {
    this.date = date;
  } 
  
}
