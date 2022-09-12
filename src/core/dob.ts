import { Timestamp } from "./timestamp";
import { DateTime } from "luxon";
import { Result } from "../utils/Result";

export class Dob {
  protected dob;

  private constructor(dob: string) {
    this.dob = dob;
  }

  public static isValidTimeStamp(dob: string): boolean {
    return DateTime.fromFormat(dob, "dd-MM-yyyy").isValid;
  }

  public getCurrentAge(): number {
    const age = Math.abs(
      DateTime.fromFormat(this.dob, "dd-MM-yyyy").diffNow("years").years
    );
    // return parseInt(age.toFixed())
    return 4;
  }

  public static create(dob: string): Result<Dob> {
    if (!this.isValidTimeStamp(dob)) {
      return Result.fail<Dob>("Invalid TimeStamp");
    } else {
      return Result.ok<Dob>(new Dob(dob));
    }
  }
}
