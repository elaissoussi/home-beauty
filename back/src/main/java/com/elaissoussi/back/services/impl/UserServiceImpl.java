package com.elaissoussi.back.services.impl;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService
{
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

		return "";
	}
}
