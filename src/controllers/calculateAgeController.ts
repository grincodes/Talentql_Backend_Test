import { timeStamp } from "console";
import { Dob } from "../core/dob";
import { BaseController } from "./baseController";

export class CalculateAgeController extends BaseController {
  constructor() {
    super();
  }
  async executeImpl(): Promise<any> {
    const timestamp = this.req.query.dob as string;

    let dobOrError = Dob.create(timestamp);

    if (dobOrError.isFailure) {
      return this.clientError(dobOrError.error as string);
    }

    let age = dobOrError.getValue().getCurrentAge();
    return this.ok(this.res, age);
  }
}
