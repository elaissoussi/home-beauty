package com.elaissoussi.back.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.elaissoussi.back.entities.Availability;

@Repository("availabilityRepository")
public interface AvailabilityRepository extends PagingAndSortingRepository<Availability, Long> {
    
	@Query("SELECT a FROM Availability a WHERE a.dayOfWeak =:dayOfWeak AND a.startHour =:startHour AND a.endHour =:endHour ")
	List<Availability> findAvailabilitiesBy(@Param("dayOfWeak") int dayOfWeak, @Param("startHour") int startHour, @Param("endHour")  int endHour);
	
}
