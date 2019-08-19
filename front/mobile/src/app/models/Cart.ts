import { JsonObject, JsonProperty } from "json2typescript";
import { CartEntry } from './CartEntry';

@JsonObject("cart")
export class Cart{
    
    @JsonProperty("id", Number)
    id : number = undefined;

    @JsonProperty("entries", [CartEntry])
    entries : CartEntry[] = undefined
}