package com.elaissoussi.back.services.impl;

import com.elaissoussi.back.entities.Customer;
import org.springframework.security.core.Authentication;

public interface UserService
{
	Authentication getAuthentication();

	String getCurrentUser();

	Customer getCurrentCustomer();

	Customer getAnonymousCustomer();
}
