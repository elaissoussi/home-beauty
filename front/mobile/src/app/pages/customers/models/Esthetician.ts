import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Esthetician")
export class Esthetician {
    
    @JsonProperty("id", Number)
    id : number = undefined;

    @JsonProperty("firstName", String)
    firstName : string = undefined;

    @JsonProperty("lastName", String)
    lastName : string = undefined;

 
}