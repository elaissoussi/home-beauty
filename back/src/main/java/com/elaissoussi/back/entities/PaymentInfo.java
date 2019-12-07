package com.elaissoussi.back.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "paymentinfos")
public class PaymentInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	private Long id;

	// card
	String cardHolderName;
	String cardType;
	String cardNumber;
	String cardExpirationDate;
	String cardCVC;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCardHolderName() {
		return cardHolderName;
	}

	public void setCardHolderName(String cardHolderName) {
		this.cardHolderName = cardHolderName;
	}

	public String getCardType() {
		return cardType;
	}

	public void setCardType(String cardType) {
		this.cardType = cardType;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getCardExpirationDate() {
		return cardExpirationDate;
	}

	public void setCardExpirationDate(String cardExpirationDate) {
		this.cardExpirationDate = cardExpirationDate;
	}

	public String getCardCVC() {
		return cardCVC;
	}

	public void setCardCVC(String cardCVC) {
		this.cardCVC = cardCVC;
	}
}
