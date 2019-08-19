package com.elaissoussi.back.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.elaissoussi.back.entities.Cart;

@Repository("cartRepository")
public interface CartRepository extends PagingAndSortingRepository<Cart, Long> {
  
  @Query("SELECT c FROM Cart c JOIN c.customer cs WHERE cs.email = :customerEmail")
  Cart findCartByCustomer(@Param("customerEmail") String customerEmail);
}
