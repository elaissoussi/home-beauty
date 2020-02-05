package com.elaissoussi.back.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.elaissoussi.back.entities.Availability;
import com.elaissoussi.back.entities.Esthetician;
import com.elaissoussi.back.repositories.EstheticianRepository;

@RestController
@RequestMapping("/availabilities")
public class AvailabilityController
{

    @Autowired
    EstheticianRepository estheticianRepository;

    @PostMapping("/{userId}")
    public Esthetician addAvailabilities(@RequestBody Set<Availability> availabilities,
                                         @PathVariable("userId") Long userId)
    {
        Esthetician esthestician = estheticianRepository.findOne(userId);

        availabilities.stream().forEach(av -> av.setEsthetician(esthestician));

        esthestician.setAvailabilities(availabilities);

        return estheticianRepository.save(esthestician);
    }
}
