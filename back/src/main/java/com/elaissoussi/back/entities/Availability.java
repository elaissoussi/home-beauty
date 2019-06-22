package com.elaissoussi.back.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="availabilities")
public class Availability {

  @Id
  @GeneratedValue(strategy=GenerationType.TABLE)
  private Long id;
  
  private int dayOfWeak;
  private int startHour; 
  private int endHour;
  private boolean available;
  
  
  @JsonIgnore
  @ManyToOne(fetch=FetchType.LAZY)
  private Esthetician esthetician;
  
  public Long getId() {
    return id;
  }
  public void setId(Long id) {
    this.id = id;
  }

  public int getStartHour() {
    return startHour;
  }
  public void setStartHour(int startHour) {
    this.startHour = startHour;
  }
  public int getEndHour() {
    return endHour;
  }
  public void setEndHour(int endHour) {
    this.endHour = endHour;
  }
  public boolean isAvailable() {
    return available;
  }
  public void setAvailable(boolean available) {
    this.available = available;
  }
  public Esthetician getEsthetician() {
    return esthetician;
  }
  public void setEsthetician(Esthetician esthetician) {
    this.esthetician = esthetician;
  }
  public int getDayOfWeak() {
    return dayOfWeak;
  }
  public void setDayOfWeak(int dayOfWeak) {
    this.dayOfWeak = dayOfWeak;
  }
}
