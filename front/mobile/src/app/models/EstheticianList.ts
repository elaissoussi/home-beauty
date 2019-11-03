import { JsonObject, JsonProperty } from "json2typescript";
import { Esthetician } from "./Esthetician"

@JsonObject("EstheticianList")
export class EstheticianList{

    @JsonProperty("estheticianlist",[Esthetician])
    estheticianlist : Esthetician[] = undefined;
}