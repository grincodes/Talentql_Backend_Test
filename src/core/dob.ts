import { differenceInYears, parseISO } from "date-fns";

export class Dob {
  public static getCurrentAge(dob: number): number {
    const age = differenceInYears(new Date(), new Date(dob));
    return age;
  }

  public static isValidTimeStamp(timestamp: number): boolean {
    return new Date(timestamp).getTime() > 0;
  }
}
