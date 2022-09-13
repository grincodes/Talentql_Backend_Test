import { Timestamp } from "./timestamp";

export class Dob {
  public static getCurrentAge(timestamp: Timestamp): number {
    var dob = new Date(timestamp.value);
    var now = new Date();

    var age = now.getFullYear() - dob.getFullYear();

    return age;
  }
}
