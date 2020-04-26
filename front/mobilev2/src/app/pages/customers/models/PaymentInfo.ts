import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject("paymentInfo")
export class PaymentInfo {

    @JsonProperty("cardHolderName", String)
    cardHolderName : String = undefined;

    @JsonProperty("cardNumber", String)
    cardNumber : String = undefined;
}