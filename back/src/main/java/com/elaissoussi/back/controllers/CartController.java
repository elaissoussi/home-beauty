package com.elaissoussi.back.controllers;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.*;

import com.elaissoussi.back.entities.Cart;
import com.elaissoussi.back.services.CartService;

@RestController
@RequestMapping(value = "/cart")
public class CartController
{
        @Resource
        CartService cartService;

        @GetMapping
        Cart getCart()
        {
            return cartService.getCart();
        }

        @GetMapping("/{cartId}")
        Cart getCart( Long cartId)
        {
                return cartService.getCart(cartId);
        }

        @PostMapping("/updateCart")
        Cart addToCart(@RequestParam("service") Long serviceId, @RequestParam("quantity") int quantity)
        {
            return cartService.updateCart(null, serviceId, quantity);
        }

        @PutMapping("/{cartId}")
        Cart updateCart(Long cartId , @RequestParam("service") Long serviceId, @RequestParam("quantity") int quantity)
        {
                return cartService.updateCart(cartId, serviceId, quantity);
        }
}
