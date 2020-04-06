package com.elaissoussi.back.services.impl;

import com.elaissoussi.back.entities.*;
import com.elaissoussi.back.filters.UserInfo;
import com.elaissoussi.back.repositories.*;
import com.elaissoussi.back.services.CartService;
import com.elaissoussi.back.services.UserService;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.*;

@org.springframework.stereotype.Service("cartService")
@Transactional
public class CartServiceImpl implements CartService
{

	@Resource
	private CartRepository cartRepository;

	@Resource
	private CartEntryRepository cartEntryRepository;

	@Resource
	private CustomerRepository customerRepository;

	@Resource
	private ServiceRepository serviceRepository;

	@Resource
	private EstheticianRepository estheticianRepository;

	@Resource
	UserService userService;

	@Resource 
	PaymentInfoRepository paymentInfoRepository;

	@Resource
	AvailabilityRepository availabilityRepository;
	
	@Override
	public Cart getCart()
	{
		String customerEmail = userService.getCurrentUser();

		Cart cart = cartRepository.findCartByCustomer(customerEmail);
		if (Objects.isNull(cart))
		{
			cart = cartRepository.save(new Cart());
		}
		return cart;
	}

	@Override
	public Cart getCart(Long cartId)
	{
		if(Objects.isNull(cartId)){
			return getCart();
		}

		return cartRepository.findOne(cartId);
	}

	@Override
	public Cart updateCart(Long cartId, Long serviceId, int quantity)
	{
		Cart cart = getCart(cartId);
		Service service = serviceRepository.findOne(serviceId);

		// remove from cart
		if (quantity == 0)
		{
			return removeFromCart(cart, serviceId);
		}

		// update cart quantity
		if (!CollectionUtils.isEmpty(cart.getEntries()) && service != null)
		{
			Optional<CartEntry> entry = cart.getEntries().stream()
					.filter(e -> e.getService().getId().equals(service.getId())).findFirst();

			if (entry.isPresent())
			{
				CartEntry cartEntry = entry.get();
				int newQuantity = cartEntry.getQuantity() + quantity;
				if (newQuantity > 0)
				{
					cartEntry.setQuantity(newQuantity);
					cartEntryRepository.save(cartEntry);
				}
			} else
			{
				CartEntry newEntry = new CartEntry();
				newEntry.setService(service);
				newEntry.setQuantity(quantity);
				newEntry.setCart(cart);
				cartEntryRepository.save(newEntry);

				List<CartEntry> newEntries = cart.getEntries();
				newEntries.add(newEntry);
				cart.setEntries(newEntries);
			}
		} else
		{
			// New cart
			String customerEmail = userService.getCurrentUser();
			Customer customer = customerRepository.findByEmail(customerEmail);
			cart.setCustomer(customer);
			// new Entry
			CartEntry newEntry = new CartEntry();
			newEntry.setService(service);
			newEntry.setQuantity(quantity);
			newEntry.setCart(cart);

			List<CartEntry> entries = new ArrayList<>();
			entries.add(newEntry);
			cart.setEntries(entries);
		}

		calculateCart(cart);

		return cartRepository.save(cart);
	}

	@Override
	public Cart removeFromCart(Cart cart, Long serviceId)
	{
		Service service = serviceRepository.findOne(serviceId);

		if (!CollectionUtils.isEmpty(cart.getEntries()) && service != null)
		{
			Optional<CartEntry> entry = cart.getEntries().stream()
					.filter(e -> e.getService().getId().equals(service.getId())).findFirst();

			if (entry.isPresent())
			{
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

	@Override
	public Cart addAppointment(Appointment appointment)
	{
		Cart cart = getCart();

		cart.setDate(appointment.getDate());

		Long availabilityId = appointment.getAvailabilityId();
		Availability availability =  availabilityRepository.findOne(availabilityId);
		cart.setStartHour(availability.getStartHour());
		cart.setEndHour(availability.getEndHour());

		return cartRepository.save(cart);
	}

	@Override
	public Cart addPaymentInfo(PaymentInfo paymentInfo)
	{
		paymentInfoRepository.save(paymentInfo);
		
		Cart cart = getCart();
		cart.setPaymentInfo(paymentInfo);
		
		return cartRepository.save(cart);
	}

	@Override
	public Cart addEsthetician(Long estheticianId) {

		Esthetician esthetician = estheticianRepository.findOne(estheticianId);
		Cart cart = getCart();
		cart.setEsthetician(esthetician);

		return cartRepository.save(cart);
	}

	@Override
	public void calculateCart(Cart cart)
	{
		if (Objects.nonNull(cart) && !CollectionUtils.isEmpty(cart.getEntries()))
		{
			int cartTotal = cart.getEntries().stream().mapToInt(e ->
			{
				BigDecimal price = e.getService().getPrice();
				BigDecimal entrySum = price.multiply(BigDecimal.valueOf(e.getQuantity()));
				return entrySum.intValue();
			}).sum();

			cart.setTotal(cartTotal);
		}
	}

}
