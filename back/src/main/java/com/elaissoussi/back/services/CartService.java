package com.elaissoussi.back.services;

import com.elaissoussi.back.entities.Cart;

public interface CartService {

  Cart getCart(String customerEmail);

  Cart updateCart(String customerEmail, Long serviceId, int quantity);

  Cart removeFromCart(String customer, Long serviceId);
}
