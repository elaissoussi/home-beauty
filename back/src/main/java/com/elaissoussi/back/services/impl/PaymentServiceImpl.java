package com.elaissoussi.back.services.impl;

import com.elaissoussi.back.entities.Cart;
import com.elaissoussi.back.services.PaymentService;

public class PaymentServiceImpl implements PaymentService
{
	@Override
	public boolean pay(Cart cart)
	{
		return true;
	}
}
