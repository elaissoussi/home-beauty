package com.elaissoussi.back.controllers;

import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elaissoussi.back.entities.Availability;
import com.elaissoussi.back.entities.AvailabilityList;
import com.elaissoussi.back.entities.Esthetician;
import com.elaissoussi.back.entities.EstheticianList;
import com.elaissoussi.back.entities.Service;
import com.elaissoussi.back.repositories.EstheticianRepository;
import com.elaissoussi.back.services.EsthesticianService;

@RestController
@RequestMapping("/estheticians")
public class EsthesticianController {
  
  @Autowired
  EstheticianRepository estheticianRepository; 
  
  @Autowired
  EsthesticianService estheticianService; 
  
  @Autowired
  private BCryptPasswordEncoder bCryptPasswordEncoder;

  
  @PostMapping("/login")
  public Esthetician login(@RequestBody Esthetician esthetician) {
      return estheticianRepository.findByEmailAndPassword(esthetician.getEmail(), esthetician.getPassword());
  }
  
  @GetMapping("{id}/services")
  public Set<Service> services(@PathVariable Long id) {
      return estheticianRepository.findServicesByEstheticianId(id);
  }
  
  
  @PostMapping("/sign-up")
  public Esthetician signup(@RequestBody Esthetician esthetician) {

    esthetician.setPassword(bCryptPasswordEncoder.encode(esthetician.getPassword()));
    estheticianRepository.save(esthetician);

    return esthetician;
  }
  
  @GetMapping("/zipcode/{zipcode}")
  public Set<Esthetician> getByZipCode(@PathVariable("zipcode") int zipCode){
    return estheticianRepository.findByZipCode(zipCode);
  }
  
  @GetMapping("/zipcode/{zipcode}/date/{date}")
  public AvailabilityList getAvailabilities(@PathVariable("zipcode") int zipCode, 
                                              @PathVariable("date") @DateTimeFormat(pattern="dd-MM-yyyy") Date date){
    List<Availability> availabilities = estheticianService.getAvailabilities(zipCode, date);
    AvailabilityList availabilitiesList = new AvailabilityList();
    availabilitiesList.setAvailabilities(availabilities);
    
    return availabilitiesList;
  }
  
  @GetMapping("/availability/{availabilityId}")
  public EstheticianList getEstheticiansByAvalibilty(@PathVariable("availabilityId") Long avalibilityId){
	  List<Esthetician> esthestians = estheticianService.getEstheticiansByAvailability(avalibilityId);
	  
	  EstheticianList estheticianList = new EstheticianList();
	  estheticianList.setEstheticians(esthestians);
	  
	  return estheticianList;
  }
}
