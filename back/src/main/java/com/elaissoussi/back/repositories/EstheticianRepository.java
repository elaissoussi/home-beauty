package com.elaissoussi.back.repositories;

import java.util.Set;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import com.elaissoussi.back.entities.Esthetician;
import com.elaissoussi.back.entities.Service;

@RepositoryRestResource(collectionResourceRel = "estheticians", path = "estheticians")
@Repository("estheticianRepository")
public interface EstheticianRepository extends PagingAndSortingRepository<Esthetician, Long>{
  
  Esthetician findByEmailAndPassword(String email, String password);
  
  @Query("SELECT e.services FROM Esthetician e WHERE e.id = :id")
  Set<Service> findServicesByEstheticianId(@Param("id") Long id);
  
}
