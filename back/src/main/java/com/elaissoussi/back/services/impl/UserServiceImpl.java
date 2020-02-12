package com.elaissoussi.back.services.impl;

import com.elaissoussi.back.entities.Customer;
import com.elaissoussi.back.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService
{
	@Value("anonymous.email")
	private String anonymousEmail;

	@Resource
	UserRepository userRepository;

	@Override
	public Authentication getAuthentication()
	{
		return SecurityContextHolder.getContext().getAuthentication();
	}

	@Override
	public String getCurrentUser()
	{
		if (getAuthentication() != null)
		{
			return getAuthentication().getName();
		}
		return getAnonymousCustomer().getEmail();
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
		return (Customer) userRepository.findByEmail(anonymousEmail);
	}
}
