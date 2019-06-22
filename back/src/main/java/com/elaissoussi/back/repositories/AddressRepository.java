package com.elaissoussi.back.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.elaissoussi.back.entities.Address;

@Repository("addressRepository")
public interface AddressRepository extends PagingAndSortingRepository<Address, Long>{
}
