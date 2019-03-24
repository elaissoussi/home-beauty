package com.elaissoussi.back.repositories;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import com.elaissoussi.back.entities.Customer;

@RepositoryRestResource(collectionResourceRel = "customers", path = "customers")
@Repository("customerRepository")
public interface CustomerRepository extends  UserBaseRepository<Customer>{
    
}
