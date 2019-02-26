package com.elaissoussi.back.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import com.elaissoussi.back.entities.Esthetician;

@RepositoryRestResource(collectionResourceRel = "estheticians", path = "estheticians")
@Repository("estheticianRepository")
public interface EstheticianRepository extends PagingAndSortingRepository<Esthetician, Long>{
  
  Esthetician findByEmailAndPassword(String email, String password);
  
}
