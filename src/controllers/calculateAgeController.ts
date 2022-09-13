import { differenceInYears, parseISO } from "date-fns";

import { ParamsRequest } from "../core/dto/params";

import { validateAndError } from "../utils/ErrorExtractor";
import { BaseController } from "./baseController";

export class CalculateAgeController extends BaseController {
  constructor() {
    super();
  }
  async executeImpl(): Promise<any> {
    const params = ParamsRequest.from(this.req.query as Record<string, string>);
    await validateAndError(this.res, params);
    const age = differenceInYears(new Date(), new Date(Number(params.dob)));
    console.log(this.req);

    return this.ok(this.res, age);
  }
}
