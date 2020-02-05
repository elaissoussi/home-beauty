package com.elaissoussi.back.security;

import java.util.Collections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.elaissoussi.back.repositories.UserRepository;

import javax.annotation.Resource;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

  @Resource
  UserRepository userRepository; 
  
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    
    com.elaissoussi.back.entities.User user = userRepository.findByEmail(username);
    
    if(user == null) {
      throw new UsernameNotFoundException(username);
    }
    
    return new User(user.getEmail(), user.getPassword(), Collections.emptyList());
  }

}
