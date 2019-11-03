import { JsonObject, JsonProperty } from "json2typescript";
import { Esthetician } from "./Esthetician"

@JsonObject("estheticians")
export class EstheticianList{

    @JsonProperty("estheticians",[Esthetician])
    estheticianlist : Esthetician[] = undefined;
}