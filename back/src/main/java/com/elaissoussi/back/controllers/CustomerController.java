package com.elaissoussi.back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.elaissoussi.back.entities.Customer;
import com.elaissoussi.back.repositories.CustomerRepository;

@RestController
@RequestMapping("/customers")
public class CustomerController {

  @Autowired
  CustomerRepository customerRepository;

  @Autowired
  private BCryptPasswordEncoder bCryptPasswordEncoder;

  @PostMapping("/login")
  public Customer login(@RequestBody Customer customer) {
    return customerRepository.findByEmailAndPassword(customer.getEmail(), customer.getPassword());
  }


  @PostMapping("/sign-up")
  public Customer signup(@RequestBody Customer customer) {

    // TODO : fix primary key violation , example 
    /*
     * { "email": "est3@gmail.com", "password": "est3", "id":4 }
     * 
     */
    
    customer.setPassword(bCryptPasswordEncoder.encode(customer.getPassword()));
    customerRepository.save(customer);

    return customer;
  }

}
