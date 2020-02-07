package com.elaissoussi.back.controllers;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.elaissoussi.back.entities.Appointment;
import com.elaissoussi.back.entities.Cart;
import com.elaissoussi.back.services.CartService;

@RestController
@RequestMapping(value = "/cart")
public class CartController
{
        String string ="^[0-9]{4}$";

        @Resource
        CartService cartService;

        @GetMapping
        Cart getCart()
        {
            return cartService.getCart();
        }

        @PostMapping("/updateCart")
        Cart addToCart(@RequestParam("service") Long serviceId, @RequestParam("quantity") int quantity)
        {
            return cartService.updateCart(serviceId, quantity);
        }
}
