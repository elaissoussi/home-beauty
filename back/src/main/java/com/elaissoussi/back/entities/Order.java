package com.elaissoussi.back.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	private Long id;

	private Customer customer;

	private Esthetician esthetician;

	private Date startDate;

	private Date endHour;

	@OneToMany(mappedBy = "order", 
			   cascade = CascadeType.ALL, 
			   fetch = FetchType.LAZY)
	private List<OrderEntry> entries;

}
