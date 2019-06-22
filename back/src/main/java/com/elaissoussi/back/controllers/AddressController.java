package com.elaissoussi.back.controllers;

import java.util.HashSet;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.elaissoussi.back.entities.Address;
import com.elaissoussi.back.entities.User;
import com.elaissoussi.back.repositories.UserRepository;

@RestController
@RequestMapping("/addresses")
public class AddressController {

  @Autowired
  UserRepository userRepository;

  @PostMapping("/{userId}")
  public Address addAddress(@RequestBody Address address, @PathVariable("userId") Long userId) {

    User user = userRepository.findOne(userId);

    Set<Address> addresses = new HashSet<>(user.getAddresses());
    addresses.add(address);

    user.setAddresses(addresses);
    address.setUser(user);

    userRepository.save(user);

    return address;
  }
}
