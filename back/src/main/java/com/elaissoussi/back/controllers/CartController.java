package com.elaissoussi.back.controllers;

import javax.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
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

	@PostMapping("/setCartTime")
	Cart setCartTime(@RequestParam("customer") String customerEmail, 
		           @RequestParam("esthetician") String estheticianId,
		           @RequestParam("startHour") String startHour,
		           @RequestParam("endHour") String endHour,
		           @RequestParam("date") String date) {
	   return cartService.updateCart(customerEmail,estheticianId,startHour,endHour,date); 
  }
}
