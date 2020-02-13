package com.elaissoussi.back.controllers;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elaissoussi.back.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController
{
	@Resource
	UserService userService;

	@GetMapping("/current")
	public String getCurrentUser()
	{
		return userService.getCurrentUser();
	}
}
