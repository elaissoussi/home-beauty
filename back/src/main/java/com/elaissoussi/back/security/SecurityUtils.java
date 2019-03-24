package com.elaissoussi.back.security;

public class SecurityUtils {
    
  private SecurityUtils(){
    throw new IllegalStateException();
  }
  
  public static final String SECRET = "SecretKeyToGenJWTs";
  public static final long EXPIRATION_TIME = 864_000_000;
  public static final String TOKEN_PREFIX = "Bearer ";
  public static final String HEADER_STRING = "Authorization";
  public static final String SIGN_UP_CUSTOMER_URL = "/customers/sign-up";
  public static final String SIGN_UP_ESTHETICIAN_URL = "/estheticians/sign-up";
  
}
