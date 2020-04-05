package com.elaissoussi.back.filters;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class UserFilter implements Filter
{
    private static final String CLIENT_ID = "clientId";

    @Autowired
    UserInfo userInfo;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException
    {
        final HttpServletRequest httpRequest = (HttpServletRequest) request;
        final String clientId = httpRequest.getHeader(CLIENT_ID);

        if (!StringUtils.isEmpty(clientId))
        {
            userInfo.setClientId(clientId);
        } else
        {
            userInfo.setClientId("anonymous@homebeauty.com");
        }

        chain.doFilter(request, response);
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException
    {
    }

    @Override
    public void destroy()
    {
    }
}
