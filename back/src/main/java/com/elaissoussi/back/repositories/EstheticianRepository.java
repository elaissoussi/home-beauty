package com.elaissoussi.back.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.elaissoussi.back.entities.Esthetician;

@RepositoryRestResource(collectionResourceRel = "estheticians", path = "estheticians")
public interface EstheticianRepository extends PagingAndSortingRepository<Esthetician, Long>{

}
