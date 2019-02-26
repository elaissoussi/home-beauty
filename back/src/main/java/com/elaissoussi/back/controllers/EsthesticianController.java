package com.elaissoussi.back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.elaissoussi.back.entities.Customer;
import com.elaissoussi.back.entities.Esthetician;
import com.elaissoussi.back.repositories.CustomerRepository;

@RestController
@RequestMapping("/estheticians")
public class EsthesticianController {
  
  @Autowired
  CustomerRepository customerRepository; 
  
  @PostMapping("/login")
  public Customer login(@RequestBody Esthetician esthetician) {
      return customerRepository.findByEmailAndPassword(esthetician.getEmail(), esthetician.getPassword());
  }
}
