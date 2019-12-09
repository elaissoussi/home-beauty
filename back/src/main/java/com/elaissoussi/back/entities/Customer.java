package com.elaissoussi.back.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "customers")
public class Customer extends User
{
	@OneToMany(mappedBy = "customer", 
			   cascade = CascadeType.ALL, 
			   fetch = FetchType.LAZY)
	private Set<Cart> carts;

	@OneToMany(mappedBy = "customer", 
			   cascade = CascadeType.ALL, 
			   fetch = FetchType.LAZY)
	private Set<Order> orders;
}
