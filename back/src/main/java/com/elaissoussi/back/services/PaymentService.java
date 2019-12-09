package com.elaissoussi.back.services;

import com.elaissoussi.back.entities.Cart;

public interface PaymentService
{
	boolean pay(Cart cart);
}
