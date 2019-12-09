package com.elaissoussi.back.entities;

import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "carts")
public class Cart
{

	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	private Long id;

	@JsonIgnore
	@OneToMany(fetch=FetchType.LAZY)
	private Customer customer;

	@JsonIgnore
	@OneToMany(fetch=FetchType.LAZY)
	private Esthetician esthestian;

	private int startHour;

	private int endHour;

	private Date date;

	@OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<CartEntry> entries;
	
	@OneToOne
	private PaymentInfo payementInfo;
	
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

	public List<CartEntry> getEntries()
	{
		return entries;
	}

	public void setEntries(List<CartEntry> entries)
	{
		this.entries = entries;
	}

	public Esthetician getEsthestian()
	{
		return esthestian;
	}

	public void setEsthestian(Esthetician esthestian)
	{
		this.esthestian = esthestian;
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

	public PaymentInfo getPayementInfo()
	{
		return payementInfo;
	}

	public void setPayementInfo(PaymentInfo payementInfo)
	{
		this.payementInfo = payementInfo;
	}
}
