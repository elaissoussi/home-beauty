package com.elaissoussi.back.controllers;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.elaissoussi.back.entities.Service;
import com.elaissoussi.back.entities.ServiceType;
import com.elaissoussi.back.repositories.ServiceRepository;

@RestController
@RequestMapping("/services")
public class ServiceController {
  
  @Autowired
  private ServiceRepository serviceRepository;
   
  @GetMapping("/type/{servicetype}")
  public Set<Service> services(@PathVariable String servicetype) {
      return serviceRepository.findAllByServiceType(ServiceType.valueOf(servicetype));
  }
}
