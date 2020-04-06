package com.elaissoussi.back.services.impl;

import com.elaissoussi.back.entities.Customer;
import com.elaissoussi.back.filters.UserInfo;
import com.elaissoussi.back.repositories.CustomerRepository;
import com.elaissoussi.back.repositories.UserRepository;
import com.elaissoussi.back.services.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService
{
    @Resource
    UserRepository userRepository;

    @Resource
    CustomerRepository customerRepository;

    @Resource
    UserInfo userInfo;

    @Override
    public Authentication getAuthentication()
    {
        return SecurityContextHolder.getContext().getAuthentication();
    }

    @Override
    public String getCurrentUser()
    {
        // authenticated user
        if (getAuthentication() != null)
        {
            return getAuthentication().getName();
        }
        // Anonymous user
        {
            return getAnonymousCustomer().getEmail();
        }
    }

    @Override
    public Customer getCurrentCustomer()
    {
        String userEmail = getCurrentUser();
        return (Customer) userRepository.findByEmail(userEmail);
    }

    @Override
    public Customer getAnonymousCustomer()
    {
        final String clientId = userInfo.getClientId();
        Customer customer = (Customer) userRepository.findByEmail(clientId);
        if (customer == null)
        {
            customer = new Customer();
            customer.setEmail(clientId);
            userRepository.save(customer);
        }
        return customer;
    }
}
