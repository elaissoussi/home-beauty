package com.elaissoussi.back.services;

import java.util.Date;
import java.util.List;

import com.elaissoussi.back.entities.Availability;
import com.elaissoussi.back.entities.Esthetician;

public interface EsthesticianService {
  
  List<Availability> getAvailabilities(int zipCode, Date date);
  
  List<Esthetician> getEstheticiansByAvailability(Long avalibilityId);
}
