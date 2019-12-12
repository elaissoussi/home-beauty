package com.elaissoussi.back.services.impl;

import org.springframework.stereotype.Service;

import com.elaissoussi.back.entities.Cart;
import com.elaissoussi.back.services.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService
{
	@Override
	public boolean pay(Cart cart)
	{
		return true;
	}
}
