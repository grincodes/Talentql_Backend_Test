import { differenceInYears, parseISO } from "date-fns";
import { Dob } from "../core/dob";

import { ParamsRequest } from "../core/dto/params";

import { validateAndError } from "../utils/ErrorExtractor";
import { BaseController } from "./baseController";

export class CalculateAgeController extends BaseController {
  constructor() {
    super();
  }
  async executeImpl(): Promise<any> {
    const params = ParamsRequest.from(this.req.query as Record<string, string>);
    console.log(params);

    const err = await validateAndError(params);

    if (err) {
      console.log(err);
      return this.clientError(err.errMsg);
    } else if (!Dob.isValidTimeStamp(Number(params.dob))) {
      return this.clientError("invalid timestamp value");
    } else {
      const age = differenceInYears(new Date(), new Date(Number(params.dob)));
      return this.ok(this.res, age);
    }
  }
}
