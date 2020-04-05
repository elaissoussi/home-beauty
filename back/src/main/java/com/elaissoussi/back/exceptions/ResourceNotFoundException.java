package com.elaissoussi.back.exceptions;

public class ResourceNotFoundException extends RuntimeException
{
    public ResourceNotFoundException(String message, Throwable cause)
    {
        super(message, cause);
    }
}
