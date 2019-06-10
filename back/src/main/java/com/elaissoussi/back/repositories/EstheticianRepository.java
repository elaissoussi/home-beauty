package com.elaissoussi.back.repositories;

import java.util.Set;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import com.elaissoussi.back.entities.Esthetician;
import com.elaissoussi.back.entities.Service;

@RepositoryRestResource(collectionResourceRel = "estheticians", path = "estheticians")
@Repository("estheticianRepository")
public interface EstheticianRepository extends UserBaseRepository<Esthetician>{
    
  @Query("SELECT e.services FROM Esthetician e WHERE e.id = :id")
  Set<Service> findServicesByEstheticianId(@Param("id") Long id);
  
  @Query("SELECT e FROM Esthetician e")
  Set<Esthetician> findByZipCode(int zipCode);
  
  //SELECT e FROM Esthetician e JOIN user_addresses ua on u.id = ua.user_id join e.addresses a WHERE a.zipCode = :zipCode
}
