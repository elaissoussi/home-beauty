import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("service")
export class Product{

    @JsonProperty("id", Number)
    id : number = undefined;

    @JsonProperty("name", String)
    name : String = undefined;

    //@JsonProperty("description", String)
    description : String = undefined;

    @JsonProperty("price", Number)
    price : number = undefined;

    @JsonProperty("serviceType", String)
    productType  : String = undefined;

    @JsonProperty("customerType", String)
    customerGender : String = undefined;

    image : String = undefined;
}