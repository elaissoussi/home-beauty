package com.elaissoussi.back.services;

import java.util.Date;

import com.elaissoussi.back.entities.Cart;
import com.elaissoussi.back.entities.PaymentInfo;

public interface CartService
{
	Cart getCart(String customerEmail);

	Cart updateCart(String customerEmail, Long serviceId, int quantity);

	Cart removeFromCart(String customer, Long serviceId);

	Cart addAppointement(Long estheticianId, int startHour, int endHour, Date date);

	Cart addPaymentInfo(PaymentInfo paymentInfo);
}
