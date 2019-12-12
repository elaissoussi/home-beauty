package com.elaissoussi.back.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.elaissoussi.back.entities.OrderEntry;

@Repository("orderEntryRepository")
public interface OrderEntryRepository extends PagingAndSortingRepository<OrderEntry, Long>
{
}
