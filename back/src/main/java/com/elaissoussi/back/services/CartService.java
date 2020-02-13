package com.elaissoussi.back.services;

import com.elaissoussi.back.entities.Appointment;
import com.elaissoussi.back.entities.Cart;
import com.elaissoussi.back.entities.PaymentInfo;

public interface CartService
{
	Cart getCart();

	Cart getCart(Long cartId);

	Cart updateCart(Long cartId, Long serviceId, int quantity);

	Cart removeFromCart(Cart cart, Long serviceId);

	Cart addAppointment(Appointment app);

	Cart addPaymentInfo(PaymentInfo paymentInfo);

	Cart addEsthetician(Long estheticianId);

	void calculateCart(Cart cart);
}
