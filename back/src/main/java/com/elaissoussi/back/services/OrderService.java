package com.elaissoussi.back.services;

import com.elaissoussi.back.entities.Cart;
import com.elaissoussi.back.entities.Order;

public interface OrderService {
	
	Order placeOrder(Cart cart);
}
