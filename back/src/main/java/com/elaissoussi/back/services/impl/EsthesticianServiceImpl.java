package com.elaissoussi.back.services.impl;

import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.elaissoussi.back.entities.Availability;
import com.elaissoussi.back.entities.Esthetician;
import com.elaissoussi.back.repositories.AvailabilityReposiroty;
import com.elaissoussi.back.repositories.EstheticianRepository;
import com.elaissoussi.back.services.EsthesticianService;

@Service
public class EsthesticianServiceImpl implements EsthesticianService
{
	@Resource
	EstheticianRepository estheticianRepository;

	@Resource
	AvailabilityReposiroty availabilityReposiroty;

	@Override
	public List<Availability> getAvailabilities(int zipCode, Date date)
	{
		Set<Esthetician> esthesticians = estheticianRepository.findByZipCode(zipCode);

		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		int i = calendar.get(Calendar.DAY_OF_WEEK);

		// TODO : check startDate & endDate of order !!!
		// TODO : find the good idea to check availabilty for esth
		List<Availability> availabilities = esthesticians.stream().map(e -> e.getAvailabilities())
				.flatMap(e -> e.stream()).filter(a -> a.getDayOfWeak() >= i).collect(Collectors.toList());

		return availabilities;
	}

	@Override
	public List<Esthetician> getEstheticiansByAvailability(Long avalibilityId)
	{
		Availability availability = availabilityReposiroty.findOne(avalibilityId);

		if (availability != null)
		{
			int dayOfWeak = availability.getDayOfWeak();
			int startHour = availability.getStartHour();
			int endHour = availability.getEndHour();

			List<Availability> availabilities = availabilityReposiroty.findAvailabilitiesBy(dayOfWeak, startHour,
					endHour);

			if (!CollectionUtils.isEmpty(availabilities))
			{
				return availabilities.stream().map(av -> av.getEsthetician()).collect(Collectors.toList());
			}
		}
		return Collections.emptyList();
	}

}
