package com.elaissoussi.back.repositories;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;
import com.elaissoussi.back.entities.User;

@NoRepositoryBean
public interface UserBaseRepository<T extends User> extends PagingAndSortingRepository<T, Long> {
    
  T findByEmailAndPassword(String email, String password);
  
  T findByEmail(String email);
}
