
import { JsonObject, JsonProperty } from "json2typescript";
import { Availability } from "./Availability"

@JsonObject("availabilityList")
export class AvailabilityList{

    @JsonProperty("availabilities",[Availability])
    availabilityList : Availability[] = undefined;
}