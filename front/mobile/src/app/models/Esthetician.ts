import { JsonObject, JsonProperty } from "json2typescript";

export class Esthetician {
    
    @JsonProperty("id", Number)
    id : number = undefined;

    @JsonProperty("firstName", String)
    firstName : number = undefined;

    @JsonProperty("lastName", String)
    lastName : number = undefined;

 
}