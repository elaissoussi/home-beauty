package com.elaissoussi.back.entities;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "estheticians")
public class Esthetician extends User {
   
  @JsonIgnore
  @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch=FetchType.LAZY)
  @JoinTable(name = "estheticians_services", 
             joinColumns = @JoinColumn(name = "esthestician_id"),
             inverseJoinColumns = @JoinColumn(name = "service_id"))
  private Set<Service> services = new HashSet<>();
  
  @JsonIgnore
  @OneToMany(mappedBy="esthetician" , 
             cascade = CascadeType.ALL,
             fetch =FetchType.LAZY)
  private Set<Availability> availabilities = new HashSet<>();
  
  public Set<Service> getServices() {
    return services;
  }

  public void setServices(Set<Service> services) {
    this.services = services;
  }

  public Set<Availability> getAvailabilities() {
    return availabilities;
  }

  public void setAvailabilities(Set<Availability> availabilities) {
    this.availabilities = availabilities;
  }
}
