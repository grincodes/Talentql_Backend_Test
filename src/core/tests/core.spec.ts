import { Dob } from "../dob";

describe("Core Domain", () => {
  beforeEach(() => {});

  it("should return false for invalid timestamp", () => {
    let res = Dob.isValidTimeStamp(8990909999999999879878676765);
    expect(res).toBeFalsy();
  });

  it("should return true for a valid timestamp", () => {
    let res = Dob.isValidTimeStamp(new Date().getTime());
    expect(res).toBeTruthy();
  });

  it("should return  current age from date of birth timestamp", () => {
    let dob = new Date("2012-02-26").getTime();
    let age = Dob.getCurrentAge(dob);
    expect(age).toBeGreaterThan(0);
  });
});
