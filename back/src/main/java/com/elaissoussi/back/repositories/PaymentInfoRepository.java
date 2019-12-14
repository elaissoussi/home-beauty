package com.elaissoussi.back.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.elaissoussi.back.entities.PaymentInfo;

@Repository("paymentInfoRepository") 
public interface PaymentInfoRepository extends PagingAndSortingRepository<PaymentInfo, Long>
{

}
