import { Dob } from "../core/dob";
import { Timestamp } from "../core/timestamp";
import { BaseController } from "./baseController";

export class CalculateAgeController extends BaseController {
  constructor() {
    super();
  }
  async executeImpl(): Promise<any> {
    const timestamp = parseInt(this.req.query.dob as string);

    let dobOrError = Timestamp.create({ timestamp });

    if (dobOrError.isFailure) {
      return this.clientError(dobOrError.error as string);
    }

    let age = Dob.getCurrentAge(dobOrError.getValue());
    return this.ok(this.res, age);
  }
}
