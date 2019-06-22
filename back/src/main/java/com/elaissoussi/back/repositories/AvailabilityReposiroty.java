package com.elaissoussi.back.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.elaissoussi.back.entities.Availability;

@Repository("availabilityReposiroty")
public interface AvailabilityReposiroty extends PagingAndSortingRepository<Availability, Long> {

}
