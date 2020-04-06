import { JsonObject, JsonProperty } from "json2typescript";
import { OrderEntry } from './OrderEntry';
import { DateConverter } from './DateConverter';
import { Esthetician } from './Esthetician';
import { PaymentInfo } from './PaymentInfo';

@JsonObject("order")
export class Order{
    
    @JsonProperty("id", Number)
    id : number = undefined;

    @JsonProperty("total", Number)
    total : number = undefined;
    
    @JsonProperty("date", DateConverter)
    date : Date = undefined;
    

    @JsonProperty("startHour", Number)
    startHour : number = undefined;

    @JsonProperty("endHour", Number)
    endHour : number = undefined;

    @JsonProperty("esthetician", Esthetician)
    esthetician : Esthetician = undefined;

    /*
    @JsonProperty("paymentInfo", PaymentInfo)
    paymentInfo : PaymentInfo = undefined;
    */
    
    @JsonProperty("entries", [OrderEntry])
    entries : OrderEntry[] = undefined
}