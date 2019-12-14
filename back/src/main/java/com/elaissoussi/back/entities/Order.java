package com.elaissoussi.back.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "orders")
public class Order
{
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	private Long id;


	@ManyToOne(fetch=FetchType.LAZY)
	private Customer customer;


	@ManyToOne(fetch=FetchType.LAZY)
	private Esthetician esthetician;

	private int startHour;

	private int endHour;

	private Date date;

	@OneToMany(mappedBy = "order",
			   cascade = CascadeType.ALL, 
			   fetch = FetchType.LAZY)
	private List<OrderEntry> entries;

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public Customer getCustomer()
	{
		return customer;
	}

	public void setCustomer(Customer customer)
	{
		this.customer = customer;
	}

	public int getStartHour()
	{
		return startHour;
	}

	public void setStartHour(int startHour)
	{
		this.startHour = startHour;
	}

	public int getEndHour()
	{
		return endHour;
	}

	public void setEndHour(int endHour)
	{
		this.endHour = endHour;
	}

	public Date getDate()
	{
		return date;
	}

	public void setDate(Date date)
	{
		this.date = date;
	}

	public List<OrderEntry> getEntries() {
		return entries;
	}

	public void setEntries(List<OrderEntry> entries) {
		this.entries = entries;
	}

	public Esthetician getEsthetician() {
		return esthetician;
	}

	public void setEsthetician(Esthetician esthetician) {
		this.esthetician = esthetician;
	}
}
