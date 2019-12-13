package com.elaissoussi.back.services.impl;

import org.springframework.security.core.Authentication;

public interface UserService
{
	Authentication getAuthentication();

	String getCurrentUser();
}
