import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Esthetician")
export class Esthetician {
    
    @JsonProperty("id", Number)
    id : number = undefined;

    @JsonProperty("firstName", String)
    firstName : number = undefined;

    @JsonProperty("lastName", String)
    lastName : number = undefined;

 
}