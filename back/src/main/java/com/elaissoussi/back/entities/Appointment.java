package com.elaissoussi.back.entities;

import java.io.Serializable;
import java.util.Date;

public class Appointment implements Serializable
{
    private Date date;
    private int zipCode;
    private Long availabilityId;

    public Long getAvailabilityId()
    {
        return availabilityId;
    }

    public void setAvailabilityId(Long availabilityId)
    {
        this.availabilityId = availabilityId;
    }

    public int getZipCode()
    {
        return zipCode;
    }

    public void setZipCode(int zipCode)
    {
        this.zipCode = zipCode;
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
