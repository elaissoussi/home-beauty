package com.elaissoussi.back.services;

import com.elaissoussi.back.entities.Cart;

public interface OrderService {
	
	void placeOrder(Cart cart);
}
