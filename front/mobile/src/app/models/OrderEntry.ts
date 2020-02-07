
import { JsonObject, JsonProperty } from "json2typescript";
import { Product } from "./Product";

@JsonObject("entry")
export class OrderEntry{

    @JsonProperty("id", Number)
    id : number = undefined;

    @JsonProperty("quantity", Number)
    quantity : number = undefined;

    @JsonProperty("service", Product)
    product : Product = undefined;
}