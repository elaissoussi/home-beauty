package com.elaissoussi.back.services;

import com.elaissoussi.back.entities.Appointment;
import com.elaissoussi.back.entities.Cart;
import com.elaissoussi.back.entities.PaymentInfo;

public interface CartService
{
	Cart getCart();

	Cart updateCart(Long serviceId, int quantity);

	Cart removeFromCart(Long serviceId);

	Cart addAppointment(Appointment app);

	Cart addPaymentInfo(PaymentInfo paymentInfo);
}
