package com.elaissoussi.back.entities;

import java.io.Serializable;
import java.util.Date;

public class Appointment implements Serializable
{
    private int startHour;
    private int endHour;
    private Date date;

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
