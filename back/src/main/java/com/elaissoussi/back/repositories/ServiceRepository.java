package com.elaissoussi.back.repositories;

import java.util.Set;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import com.elaissoussi.back.entities.Service;
import com.elaissoussi.back.entities.ServiceType;

@RepositoryRestResource(collectionResourceRel="services", path="services")
@Repository("serviceRepository")
public interface ServiceRepository extends PagingAndSortingRepository<Service, Long> {
  
   Set<Service> findAllByServiceType(ServiceType serviceType);
}
