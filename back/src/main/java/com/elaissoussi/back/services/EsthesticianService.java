package com.elaissoussi.back.services;

import java.util.Date;
import java.util.Map;
import java.util.Set;
import com.elaissoussi.back.entities.Availability;
import com.elaissoussi.back.entities.Esthetician;

public interface EsthesticianService {
  Map<Availability, Set<Esthetician>> getAvailabilities(int zipCode, Date date);
}
