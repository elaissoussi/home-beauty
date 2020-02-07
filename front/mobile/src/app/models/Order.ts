import { JsonObject, JsonProperty } from "json2typescript";
import { OrderEntry } from './OrderEntry';

@JsonObject("order")
export class Order{
    
    @JsonProperty("id", Number)
    id : number = undefined;

    @JsonProperty("entries", [OrderEntry])
    entries : OrderEntry[] = undefined
}