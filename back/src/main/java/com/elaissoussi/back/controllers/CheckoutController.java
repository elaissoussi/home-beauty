package com.elaissoussi.back.controllers;

import javax.annotation.Resource;

import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

	@PostMapping("/placeOrder")
	public Order placeOder()
	{
		String customerEmail = userService.getCurrentUser();
		
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
