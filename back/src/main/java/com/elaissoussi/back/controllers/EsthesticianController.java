package com.elaissoussi.back.controllers;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.elaissoussi.back.entities.Esthetician;
import com.elaissoussi.back.entities.Service;
import com.elaissoussi.back.repositories.EstheticianRepository;

@RestController
@RequestMapping("/estheticians")
public class EsthesticianController {
  
  @Autowired
  EstheticianRepository estheticianRepository; 
  
  @PostMapping("/login")
  public Esthetician login(@RequestBody Esthetician esthetician) {
      return estheticianRepository.findByEmailAndPassword(esthetician.getEmail(), esthetician.getPassword());
  }
  
  @GetMapping("{id}/services")
  public Set<Service> services(@PathVariable Long id) {
      return estheticianRepository.findServicesByEstheticianId(id);
  }
  
}
