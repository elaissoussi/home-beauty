package com.elaissoussi.back.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.elaissoussi.back.entities.Category;
import com.elaissoussi.back.entities.CustomerType;
import com.elaissoussi.back.entities.ProductList;
import com.elaissoussi.back.entities.Service;
import com.elaissoussi.back.entities.ServiceType;
import com.elaissoussi.back.repositories.ServiceRepository;

@RestController
@RequestMapping("/services")
public class ServiceController
{

    @Autowired
    private ServiceRepository serviceRepository;

    @GetMapping("/type/{serviceType}")
    public ProductList servicesByType(@PathVariable String serviceType)
    {
        Set<Service> services = serviceRepository.findAllByServiceType(ServiceType.valueOf(serviceType));
        Map<CustomerType, List<Service>> servicesByCustomerType = services.stream()
                .collect(Collectors.groupingBy(Service::getCustomerType));

        List<Category> categories = new ArrayList<>();

        servicesByCustomerType.entrySet().stream().forEach(c ->
        {
            Category cat = new Category();
            cat.setName(c.getKey().toString());
            cat.setServices(c.getValue());
            categories.add(cat);
        });

        ProductList pl = new ProductList();
        pl.setCategories(categories);

        return pl;
    }

    @GetMapping("/types")
    public Set<ServiceType> serviceTypes()
    {
        return serviceRepository.findAllServiceTypes();
    }
}
