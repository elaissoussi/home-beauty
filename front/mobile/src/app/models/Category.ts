import { JsonObject, JsonProperty } from "json2typescript";
import { Product } from './Product';

@JsonObject("category")
export class Category{

    @JsonProperty("name", String)
    name : String = undefined ;

    @JsonProperty("services", [Product])
    products : Product[] = undefined;
}