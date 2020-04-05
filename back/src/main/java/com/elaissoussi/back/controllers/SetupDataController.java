package com.elaissoussi.back.controllers;

import com.elaissoussi.back.entities.CustomerType;
import com.elaissoussi.back.entities.Service;
import com.elaissoussi.back.entities.ServiceType;
import com.elaissoussi.back.repositories.ServiceRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.Arrays;

@RestController
@RequestMapping("/data")
public class SetupDataController
{
    @Resource
    ServiceRepository serviceRepository;

    @PostMapping("/initial")
    public boolean createInitialData()
    {

        // customers

        // esthesticians

        // addresses

        // availabilities

        // services

        // Service HAIR / MEN

        serviceRepository.deleteAll();

        Service service2 = new Service();
        service2.setName("'Coupe'");
        service2.setCustomerType(CustomerType.MEN);
        service2.setServiceType(ServiceType.HAIR);
        service2.setPrice(BigDecimal.TEN);

        Service service3 = new Service();
        service3.setName("'Taille de la barbe'");
        service3.setCustomerType(CustomerType.MEN);
        service3.setServiceType(ServiceType.HAIR);
        service3.setPrice(BigDecimal.TEN);

        Service service1 = new Service();
        service1.setName("Shampoing");
        service1.setCustomerType(CustomerType.MEN);
        service1.setServiceType(ServiceType.HAIR);
        service1.setPrice(BigDecimal.TEN);

        // Service HAIR / CHILD

        Service service4 = new Service();
        service4.setName("Coupe");
        service4.setCustomerType(CustomerType.CHILD);
        service4.setServiceType(ServiceType.HAIR);
        service4.setPrice(BigDecimal.ONE);


        Service service5 = new Service();
        service5.setName("Shampoing");
        service5.setCustomerType(CustomerType.WOMEN);
        service5.setServiceType(ServiceType.HAIR);
        service5.setPrice(BigDecimal.TEN);

        Service service6 = new Service();
        service6.setName("Brushing");
        service6.setCustomerType(CustomerType.WOMEN);
        service6.setServiceType(ServiceType.HAIR);
        service6.setPrice(BigDecimal.TEN);

        Service service7 = new Service();
        service7.setName("Mèches");
        service7.setCustomerType(CustomerType.WOMEN);
        service7.setServiceType(ServiceType.HAIR);
        service7.setPrice(BigDecimal.TEN);

        serviceRepository.save(
                Arrays.asList(service1,
                        service2,
                        service3,
                        service4,
                        service5,
                        service6,
                        service7));

        return true;
    }

    @PostMapping("/sample")
    public boolean createSampleData()
    {
        // users

        // customers

        // estheticians

        // addresses

        // availabilities

        // services

        //...
        return true;
    }
}
