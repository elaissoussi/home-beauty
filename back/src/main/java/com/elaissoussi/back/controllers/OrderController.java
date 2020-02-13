package com.elaissoussi.back.controllers;

import com.elaissoussi.back.entities.Customer;
import com.elaissoussi.back.entities.Order;
import com.elaissoussi.back.entities.OrderList;
import com.elaissoussi.back.services.OrderService;
import com.elaissoussi.back.services.UserService;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Collections;
import java.util.Set;

@RestController
@RequestMapping("/orders")
public class OrderController
{
    @Resource
    UserService userService;

    @Resource
    OrderService orderService;

    @GetMapping
    public OrderList getOrders()
    {
        Customer currentCustomer = userService.getCurrentCustomer();
        Set<Order> orders = currentCustomer.getOrders();

        OrderList orderList = new OrderList();
        orderList.setOrders(orders);

        return orderList;
    }

    @GetMapping("/{orderId}")
    public Order getOrders(@PathVariable Long orderId)
    {
        return orderService.getOrder(orderId);
    }
}
