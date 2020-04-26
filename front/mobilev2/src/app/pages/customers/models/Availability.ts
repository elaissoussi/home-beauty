
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Availability")
export class Availability{

    @JsonProperty("id", Number)
    id : number = undefined;

    @JsonProperty("startHour", Number)
    startHour : number = undefined;

    @JsonProperty("endHour", Number)
    endHour : number = undefined;
}