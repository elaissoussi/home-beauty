package com.elaissoussi.back.entities;

import java.util.Set;

public class OrderList
{
    private Set<Order> orders ;

    public Set<Order> getOrders()
    {
        return orders;
    }

    public void setOrders(Set<Order> orders)
    {
        this.orders = orders;
    }
}
