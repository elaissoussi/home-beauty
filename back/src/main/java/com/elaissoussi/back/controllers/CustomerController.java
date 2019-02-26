package com.elaissoussi.back.controllers;

import org.springframework.web.bind.annotation.RestController;
import com.elaissoussi.back.entities.User;
import com.elaissoussi.back.repositories.CustomerRepository;

@RestController
public class CustomerController {
  
  CustomerRepository customerRepository; 
  
  // login 
  public User login(String login , String password) {
      return customerRepository.findByEmailAndPassword(login, password);
  }
  
}
