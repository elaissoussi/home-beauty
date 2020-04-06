package com.elaissoussi.back.exceptions;

import java.util.Date;

public class ExceptionResponse
{
    private Date timestamp;
    private String message;
    private String Details;

    public ExceptionResponse(Date timestamp, String message, String details)
    {
        this.timestamp = timestamp;
        this.message = message;
        Details = details;
    }

    public Date getTimestamp()
    {
        return timestamp;
    }

    public void setTimestamp(Date timestamp)
    {
        this.timestamp = timestamp;
    }

    public String getMessage()
    {
        return message;
    }

    public void setMessage(String message)
    {
        this.message = message;
    }

    public String getDetails()
    {
        return Details;
    }

    public void setDetails(String details)
    {
        Details = details;
    }
}
