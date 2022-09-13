import { validate, ValidationError } from "class-validator";
import { Response } from "express";
import { BaseController } from "../controllers/baseController";

export function extractAndThrowError(errors: ValidationError[]) {
  if (errors.length > 0) {
    const payload = errors.map((e) => {
      const key = Object.keys(e.constraints || {})[0];
      return {
        property: e.property,
        error: key ? e.constraints[key] : "",
      };
    });

    return {
      fields: payload,
      errMsg: `Please incorrect dob was passed, please check and try again`,
    };
  }

  return null;
}

export async function validateAndError(data: any) {
  const errors = await validate(data);

  if (
    data.dob.toLowerCase() == "null" ||
    data.dob.toLowerCase() == "undefined" ||
    data.dob.toLowerCase() == "nan"
  ) {
    return { errMsg: "dob cannot be null or undefined" };
  }

  const response = extractAndThrowError(errors);
  if (response == null) {
    return;
  }
  return { errMsg: response.errMsg };
}
