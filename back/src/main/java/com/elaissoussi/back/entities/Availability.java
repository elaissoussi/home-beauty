package com.elaissoussi.back.entities;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
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
public class Availability implements Comparable<Availability>{

  @Id
  @GeneratedValue(strategy=GenerationType.TABLE)
  private Long id;
  
  private Date startTime; 
  private Date endTime;
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
  public Date getStartTime() {
    return startTime;
  }
  public void setStartTime(Date startTime) {
    this.startTime = startTime;
  }
  public Date getEndTime() {
    return endTime;
  }
  public void setEndTime(Date endTime) {
    this.endTime = endTime;
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
  
  @Override
  public String toString() {
    Instant startInstant = Instant.ofEpochMilli(getStartTime().getTime());
    LocalDateTime startLocalTime = LocalDateTime.ofInstant(startInstant, ZoneId.systemDefault());
    
    Instant endInstant = Instant.ofEpochMilli(getEndTime().getTime());
    LocalDateTime endLocalTime = LocalDateTime.ofInstant(endInstant, ZoneId.systemDefault());
        
    return startLocalTime.getHour()+ "-" + endLocalTime.getHour();
  }
  
  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((endTime == null) ? 0 : endTime.hashCode());
    result = prime * result + ((startTime == null) ? 0 : startTime.hashCode());
    return result;
  }
  
  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    Availability other = (Availability) obj;
    if (endTime == null) {
      if (other.endTime != null)
        return false;
    } else if (!endTime.equals(other.endTime))
      return false;
    if (startTime == null) {
      if (other.startTime != null)
        return false;
    } else if (!startTime.equals(other.startTime))
      return false;
    return true;
  }
  
  @Override
  public int compareTo(Availability o) {
    return this.getStartTime().compareTo(o.getStartTime());
  }
}
