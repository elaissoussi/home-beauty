package com.elaissoussi.back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class BackApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackApplication.class, args);
	}
	
	@Bean
	public WebMvcConfigurer configureCorsForWebMvc() {
	  
	  return new WebMvcConfigurerAdapter() {
	      
	     @Override
	      public void addCorsMappings(CorsRegistry registry) {
	        registry
	        .addMapping("/**")
	        .allowedMethods("*")
	        .allowedOrigins("*")
	        .allowedHeaders("*")
	        .allowCredentials(false);
	      }
	  };
	}
	
	@Bean
	public RepositoryRestConfigurerAdapter configureCorsForRestRepository() {
	  return new RepositoryRestConfigurerAdapter() {
	   
	    @Override
	    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
	        config.getCorsRegistry()
	        .addMapping("/**")
            .allowedMethods("*")
            .allowedOrigins("*")
            .allowedHeaders("*")
            .allowCredentials(false);
	    }
	  }
	  ;
	}
}
