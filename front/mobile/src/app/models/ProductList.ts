import { JsonObject, JsonProperty } from "json2typescript";
import { Product } from './Product';
import { Category } from './Category';

@JsonObject("productList")
export class ProductList{

    @JsonProperty("categories", [Category])
    categories : Category[] = undefined;
}