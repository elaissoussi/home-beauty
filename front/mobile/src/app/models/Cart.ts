import { JsonObject, JsonProperty} from "json2typescript";
import { CartEntry } from './CartEntry';
import { Esthetician } from './Esthetician';
import { DateConverter } from './DateConverter';

@JsonObject("cart")
export class Cart{
    
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

    @JsonProperty("entries", [CartEntry])
    entries : CartEntry[] = undefined
}