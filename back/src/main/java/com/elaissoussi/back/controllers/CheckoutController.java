package com.elaissoussi.back.controllers;

import javax.annotation.Resource;

import com.elaissoussi.back.entities.Appointment;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import com.elaissoussi.back.entities.Cart;
import com.elaissoussi.back.entities.Order;
import com.elaissoussi.back.entities.PaymentInfo;
import com.elaissoussi.back.services.CartService;
import com.elaissoussi.back.services.OrderService;
import com.elaissoussi.back.services.PaymentService;
import com.elaissoussi.back.services.impl.UserService;

@RestController
@RequestMapping("/checkout")
public class CheckoutController
{
	@Resource
	CartService cartService;

	@Resource
	PaymentService paymentService;

	@Resource
	OrderService orderService;
	
	@Resource
	UserService userService;
	
	@PostMapping("/addPaymentInfo")
	public Cart addPaymentInfo(@RequestBody PaymentInfo paymentInfo)
	{
		return cartService.addPaymentInfo(paymentInfo);
	}

	@PostMapping("/addAppointment")
	public Cart addAppointment(@RequestBody Appointment appointment)
	{
		return cartService.addAppointment(appointment);
	}

	@PostMapping("/addEsthetician/{estheticianId}")
	public Cart addEsthetician(@PathVariable Long estheticianId){
		return cartService.addEsthetician(estheticianId);
	}

	@PostMapping("/placeOrder")
	public Order placeOder()
	{
		Cart cart = cartService.getCart();

		if (CollectionUtils.isEmpty(cart.getEntries()))
		{
			return null;
		}

		if (cart.getEsthestian() == null)
		{
			return null;
		}

		if (cart.getDate() == null)
		{
			return null;
		}

		if (!paymentService.pay(cart))
		{
			return null;
		}

		return orderService.placeOrder(cart);
	}

}
