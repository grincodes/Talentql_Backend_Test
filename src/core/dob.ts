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

    var today = new Date();
    var birthDate = new Date(this.dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  public static create(dob: string): Result<Dob> {
    if (!this.isValidTimeStamp(dob)) {
      return Result.fail<Dob>("Invalid TimeStamp");
    } else {
      return Result.ok<Dob>(new Dob(dob));
    }
  }
}
