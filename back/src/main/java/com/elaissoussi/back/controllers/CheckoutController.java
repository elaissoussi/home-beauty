package com.elaissoussi.back.controllers;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.elaissoussi.back.entities.Cart;
import com.elaissoussi.back.entities.PaymentInfo;
import com.elaissoussi.back.services.CartService;

@RestController
@RequestMapping("/checkout")
public class CheckoutController
{

	@Resource
	CartService cartService;

	@PostMapping("/addPaymentInfo")
	public Cart addPaymentInfo(@RequestParam("customer") String customerEmail, @RequestBody PaymentInfo paymentInfo)
	{
		return cartService.addPaymentInfo(customerEmail, paymentInfo);
	}

	@PostMapping("/placeOrder")
	public void placeOrder()
	{
		// check all details

		// payment

		// redirect to confirmation page
	}

}
