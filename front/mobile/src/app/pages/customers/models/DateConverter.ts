
import { JsonConverter, JsonCustomConvert } from "json2typescript";

@JsonConverter
export class DateConverter implements JsonCustomConvert<Date> {

    serialize(date: Date): any {
        if (date == undefined) {
            return "";
        }
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }

    deserialize(date: any): Date {
        if (date == undefined) {
            return new Date();
        }
        return new Date(date);
    }
}