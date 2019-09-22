package com.elaissoussi.back.services;

import java.util.Date;
import java.util.List;
import java.util.Set;

import com.elaissoussi.back.entities.Availability;
import com.elaissoussi.back.entities.Esthetician;

public interface EsthesticianService {
  
  List<Availability> getAvailabilities(int zipCode, Date date);
  
  Set<Esthetician> getEstheticiansByAvailability(Long avalibilityId);
}
