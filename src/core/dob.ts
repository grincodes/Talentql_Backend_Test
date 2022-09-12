import { Timestamp } from "./timestamp";
import { DateTime } from "luxon";
import { Result } from "../utils/Result";

export class Dob {
  protected dob;

  private constructor(dob: string) {
    this.dob = dob;
  }

  public static isValidTimeStamp(dob: string): boolean {
    // return DateTime.fromFormat(dob, "dd-MM-yyyy").isValid;
    return new Date(dob).getTime() > 0;
  }

  public getCurrentAge(): number {
    // const age = Math.abs(
    //   DateTime.fromFormat(this.dob, "dd-MM-yyyy").diffNow("years").years
    // );

    // return parseInt(age.toFixed());

    var millisecondsBetweenDOBAnd1970 = new Date(this.dob).getTime();
    var millisecondsBetweenNowAnd1970 = Date.now();
    var ageInMilliseconds =
      millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;
    //--We will leverage Date.parse and now method to calculate age in milliseconds refer here https://www.w3schools.com/jsref/jsref_parse.asp

    var milliseconds = ageInMilliseconds;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    /*using 30 as base as months can have 28, 29, 30 or 31 days depending a month in a year it itself is a different piece of comuptation*/
    var year = day * 365;

    //let the age conversion begin
    var years = Math.round(milliseconds / year);

    return years;
  }

  public static create(dob: string): Result<Dob> {
    if (!this.isValidTimeStamp(dob)) {
      return Result.fail<Dob>("Invalid TimeStamp");
    } else {
      return Result.ok<Dob>(new Dob(dob));
    }
  }
}
