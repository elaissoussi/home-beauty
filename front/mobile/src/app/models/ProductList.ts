import { JsonObject, JsonProperty } from "json2typescript";
import { Product } from './Product';

@JsonObject("productList")
export class ProductList{

    @JsonProperty("name", String)
    category : String = undefined ;

    @JsonProperty("services", [Product])
    products : Product[] = undefined;
}