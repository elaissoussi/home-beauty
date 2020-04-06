
import { JsonObject, JsonProperty } from "json2typescript";
import { Order } from "./Order"

@JsonObject("orderList")
export class OrderList{

    @JsonProperty("orders",[Order])
    orderList : Order[] = undefined;
}