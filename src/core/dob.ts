import moment from "moment";
import { Timestamp } from "./timestamp";



export class Dob {
   
    public static getCurrentAge(timestamp:Timestamp): number {
        var dob = timestamp.value;
        var _now = Date.now();
        var now = moment(_now)
        
        return now.diff(dob, 'years');
    }

}