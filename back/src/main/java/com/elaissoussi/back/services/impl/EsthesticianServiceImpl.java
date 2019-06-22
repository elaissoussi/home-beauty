package com.elaissoussi.back.services.impl;


import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.function.Function;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.elaissoussi.back.entities.Availability;
import com.elaissoussi.back.entities.Esthetician;
import com.elaissoussi.back.repositories.EstheticianRepository;
import com.elaissoussi.back.services.EsthesticianService;

@Service
public class EsthesticianServiceImpl implements EsthesticianService {

  @Autowired
  EstheticianRepository estheticianRepository;

  @Override
  public Map<Availability, Set<Esthetician>> getAvailabilities(int zipCode, Date date) {

    Set<Esthetician> esthesticians = estheticianRepository.findByZipCode(zipCode);
    
    Calendar calendar = Calendar.getInstance();
    calendar.setTime(date);
    int i = calendar.get(Calendar.DAY_OF_WEEK);
    
    List<Availability> availabilities =
        esthesticians.stream().map(e -> e.getAvailabilities()).flatMap(e -> e.stream())
            .filter(a -> a.getDayOfWeak() > i).collect(Collectors.toList());

    // Group by Esthetician
    Map<Availability, Set<Esthetician>> availabilitiesMap =
        availabilities.stream().collect(Collectors.groupingBy(Function.identity(),
            Collectors.mapping(Availability::getEsthetician, Collectors.toSet())));

    return new TreeMap<>(availabilitiesMap);
  }

}
