package com.elaissoussi.back.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elaissoussi.back.entities.PaymentInfo;

@RestController
@RequestMapping("/checkout")
public class CheckoutController {

	@GetMapping("/addPaymentInfo")
	public String getPaymentInfo() {
		return "add Payment Info GET";
	}
	
	
	@PostMapping("/addPaymentInfo")
	public String addPaymentInfo() {
		// add payement info to car
		return "add Payment Info POST";
	}
	
	@PostMapping("/placeOrder")
	public void placeOrder() {

		// check all details

		// payment

		// redirect to confirmation page
	}
	
}
