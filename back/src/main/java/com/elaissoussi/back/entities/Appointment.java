package com.elaissoussi.back.entities;

import java.util.Date;

public class Appointment
{
	private Long estheticianId;
	private int startHour;
	private int endHour;
	private Date date;
	
	public Long getEstheticianId()
	{
		return estheticianId;
	}
	public void setEstheticianId(Long estheticianId)
	{
		this.estheticianId = estheticianId;
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
}
