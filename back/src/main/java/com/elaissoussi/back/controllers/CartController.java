package com.elaissoussi.back.controllers;

import java.util.Date;

import javax.annotation.Resource;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.elaissoussi.back.entities.Appointment;
import com.elaissoussi.back.entities.Cart;
import com.elaissoussi.back.services.CartService;

@RestController
@RequestMapping("/cart")
public class CartController
{
	@Resource
	CartService cartService;

	@GetMapping
	Cart getCart(@RequestParam("customer") String customerEmail)
	{
		return cartService.getCart(customerEmail);
	}

	@PostMapping("/updateCart")
	Cart addToCart(@RequestParam("customer") String customerEmail, @RequestParam("service") Long serviceId,
			@RequestParam("quantity") int quantity)
	{
		return cartService.updateCart(customerEmail, serviceId, quantity);
	}

	@PostMapping("/addAppointement")
	Cart addAppointement(@RequestBody Appointment appointment)
	{
		return cartService.addAppointement(appointment);
	}
}
