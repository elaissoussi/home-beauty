package com.elaissoussi.back.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.elaissoussi.back.entities.Order;

@Repository("orderRepository")
public interface OrderRepository extends PagingAndSortingRepository<Order, Long>
{
}
