package com.elaissoussi.back.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "customers")
public class Customer extends User
{	
	@JsonIgnore
	@OneToMany(mappedBy = "customer", 
			   cascade = CascadeType.ALL, 
			   fetch = FetchType.LAZY)
	private Set<Cart> carts;

	@JsonIgnore
	@OneToMany(mappedBy = "customer", 
			   cascade = CascadeType.ALL, 
			   fetch = FetchType.LAZY)
	private Set<Order> orders;

	public Set<Cart> getCarts()
	{
		return carts;
	}

	public void setCarts(Set<Cart> carts)
	{
		this.carts = carts;
	}

	public Set<Order> getOrders()
	{
		return orders;
	}

	public void setOrders(Set<Order> orders)
	{
		this.orders = orders;
	}
}
