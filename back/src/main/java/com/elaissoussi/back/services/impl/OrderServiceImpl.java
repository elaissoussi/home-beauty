package com.elaissoussi.back.services.impl;

import javax.annotation.Resource;

import com.elaissoussi.back.entities.Cart;
import com.elaissoussi.back.entities.Order;
import com.elaissoussi.back.entities.OrderEntry;
import com.elaissoussi.back.repositories.OrderRepository;
import com.elaissoussi.back.services.OrderService;

public class OrderServiceImpl implements OrderService
{
	@Resource
	OrderRepository orderRepository;

	@Override
	public Order placeOrder(Cart cart)
	{
		Order order = new Order();

		order.setCustomer(cart.getCustomer());
		order.setEsthestian(cart.getEsthestian());
		order.setDate(cart.getDate());
		order.setStartHour(cart.getStartHour());
		order.setEndHour(cart.getEndHour());

		cart.getEntries().forEach(e ->
		{

			OrderEntry oe = new OrderEntry();
			oe.setService(e.getService());
			oe.setQuantity(e.getQuantity());
			oe.setOrder(order);
		});

		return orderRepository.save(order);
	}

}
