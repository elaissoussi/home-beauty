package com.elaissoussi.back.services.impl;

import com.elaissoussi.back.entities.Cart;
import com.elaissoussi.back.entities.Order;
import com.elaissoussi.back.entities.OrderEntry;
import com.elaissoussi.back.repositories.CartRepository;
import com.elaissoussi.back.repositories.OrderRepository;
import com.elaissoussi.back.services.OrderService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService
{
    @Resource
    OrderRepository orderRepository;

    @Resource
    CartRepository cartRepository;

    @Override
    public Order placeOrder(Cart cart)
    {
        Order order = new Order();

        order.setCustomer(cart.getCustomer());
        order.setEsthetician(cart.getEsthetician());
        order.setTotal(cart.getTotal());
        order.setDate(cart.getDate());
        order.setStartHour(cart.getStartHour());
        order.setEndHour(cart.getEndHour());

        List<OrderEntry> entries = new ArrayList();
        cart.getEntries().forEach(e ->
        {
            OrderEntry oe = new OrderEntry();
            oe.setService(e.getService());
            oe.setQuantity(e.getQuantity());
            oe.setOrder(order);

            entries.add(oe);
        });
        order.setEntries(entries);

        cartRepository.delete(cart);

        return orderRepository.save(order);
    }

    @Override
    public Order getOrder(Long orderId)
    {
        return orderRepository.findOne(orderId);
    }

}
