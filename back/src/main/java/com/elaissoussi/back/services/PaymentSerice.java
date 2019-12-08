package com.elaissoussi.back.services;

import com.elaissoussi.back.entities.Cart;

public interface PaymentSerice
{
	boolean pay(Cart cart);
}
