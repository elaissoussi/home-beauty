package com.elaissoussi.back.services;

import com.elaissoussi.back.entities.Appointment;
import com.elaissoussi.back.entities.Cart;
import com.elaissoussi.back.entities.PaymentInfo;

public interface CartService
{
	Cart getCart(String customerEmail);

	Cart updateCart(String customerEmail, Long serviceId, int quantity);

	Cart removeFromCart(String customer, Long serviceId);

	Cart addAppointement(Appointment app);

	Cart addPaymentInfo(PaymentInfo paymentInfo);
}
