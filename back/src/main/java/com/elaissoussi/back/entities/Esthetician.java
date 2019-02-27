package com.elaissoussi.back.entities;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "estheticians")
public class Esthetician extends User {
    
  @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch=FetchType.LAZY)
  @JoinTable(name = "estheticians_services", 
             joinColumns = @JoinColumn(name = "esthestician_id"),
             inverseJoinColumns = @JoinColumn(name = "service_id"))
  private Set<Service> services = new HashSet<>();

  public Set<Service> getServices() {
    return services;
  }

  public void setServices(Set<Service> services) {
    this.services = services;
  }
}