package com.elaissoussi.back.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.elaissoussi.back.entities.CartEntry;

@Repository("cartEntryRepository")
public interface CartEntryRepository extends PagingAndSortingRepository<CartEntry, Long> {
}
