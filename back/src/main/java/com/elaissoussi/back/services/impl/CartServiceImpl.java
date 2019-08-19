package com.elaissoussi.back.services.impl;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import javax.annotation.Resource;
import javax.transaction.Transactional;
import org.springframework.util.CollectionUtils;
import com.elaissoussi.back.entities.Cart;
import com.elaissoussi.back.entities.CartEntry;
import com.elaissoussi.back.entities.Customer;
import com.elaissoussi.back.entities.Service;
import com.elaissoussi.back.repositories.CartEntryRepository;
import com.elaissoussi.back.repositories.CartRepository;
import com.elaissoussi.back.repositories.CustomerRepository;
import com.elaissoussi.back.repositories.ServiceRepository;
import com.elaissoussi.back.services.CartService;

@org.springframework.stereotype.Service("cartService")
@Transactional
public class CartServiceImpl implements CartService {

  @Resource
  private CartRepository cartRepository;

  @Resource
  private CartEntryRepository cartEntryRepository;

  @Resource
  private CustomerRepository customerRepository;

  @Resource
  private ServiceRepository serviceRepository;

  @Override
  public Cart getCart(String customerEmail) {
    Cart cart = cartRepository.findCartByCustomer(customerEmail);
    if (cart == null) {
      cart = new Cart();
    }
    return cart;
  }

  @Override
  public Cart updateCart(String customerEmail, Long serviceId, int quantity) {

    Cart cart = getCart(customerEmail);
    Service service = serviceRepository.findOne(serviceId);

    // remove from cart
    if (quantity == 0) {
      return removeFromCart(customerEmail, serviceId);
    }

    // update cart quantity
    if (!CollectionUtils.isEmpty(cart.getEntries()) && service != null) {

      Optional<CartEntry> entry = cart.getEntries().stream()
          .filter(e -> e.getService().getId().equals(service.getId())).findFirst();

      if (entry.isPresent()) {
        CartEntry cartEntry = entry.get();
        int newQuantity = cartEntry.getQuantity() + quantity;
        if (newQuantity > 0) {
          cartEntry.setQuantity(newQuantity);
          cartEntryRepository.save(cartEntry);
        }
      } else {
        CartEntry newEntry = new CartEntry();
        newEntry.setService(service);
        newEntry.setQuantity(quantity);
        newEntry.setCart(cart);
        cartEntryRepository.save(newEntry);

        List<CartEntry> newEntries = cart.getEntries();
        newEntries.add(newEntry);
        cart.setEntries(newEntries);
      }
    } else {
      // Create a new cart

      // customer
      Customer customer = customerRepository.findByEmail(customerEmail);
      cart.setCustomer(customer);
      // new Entry
      CartEntry newEntry = new CartEntry();
      newEntry.setService(service);
      newEntry.setQuantity(quantity);
      newEntry.setCart(cart);

      cart.setEntries(Collections.singletonList(newEntry));
    }

    return cartRepository.save(cart);
  }

  @Override
  public Cart removeFromCart(String customer, Long serviceId) {

    Cart cart = getCart(customer);
    Service service = serviceRepository.findOne(serviceId);

    if (!CollectionUtils.isEmpty(cart.getEntries()) && service != null) {


      Optional<CartEntry> entry = cart.getEntries().stream()
          .filter(e -> e.getService().getId().equals(service.getId())).findFirst();

      if (entry.isPresent()) {
        // cart Entry
        cartEntryRepository.delete(entry.get());

        // cart
        List<CartEntry> newEntries = cart.getEntries();
        newEntries.remove(entry.get());
        cart.setEntries(newEntries);

        return cartRepository.save(cart);
      }
    }

    return cart;
  }

}
