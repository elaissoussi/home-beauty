package com.elaissoussi.back.services;

import java.util.Date;
import java.util.List;
import com.elaissoussi.back.entities.Availability;

public interface EsthesticianService {
  List<Availability> getAvailabilities(int zipCode, Date date);
}
