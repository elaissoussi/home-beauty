package com.elaissoussi.back.controllers;

import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
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
  public Map servicesByType(@PathVariable String servicetype) {
      // HAIR - CARE
      // TO FIX FOR OTHER SERVICES
      Set<Service> services = serviceRepository.findAllByServiceType(ServiceType.valueOf(servicetype));
      return services.stream().collect(Collectors.groupingBy(Service::getCustomerType));
  }
  
  @GetMapping("/types")
  public Set<ServiceType> serviceTypes() {
      return serviceRepository.findAllServiceTypes();
  }
}
