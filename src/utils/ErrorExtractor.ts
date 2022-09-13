import { validate, ValidationError } from "class-validator";
import { Response } from "express";

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
      errMsg: `Please incorrect fields was passed, please check and try again`,
    };
  }

  return null;
}

export async function validateAndError(res: Response, data: any) {
  const errors = await validate(data);
  const response = extractAndThrowError(errors);
  if (response == null) {
    return;
  }
  res.status(400).json(response);
}
