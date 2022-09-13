import { IsISO8601, IsNumber } from "class-validator";
import { plainToInstance } from "class-transformer";

export class ParamsRequest {
  @IsNumber({})
  public dob: string;

  public static from(obj: Record<string, string> = {}) {
    if (!obj) obj = {};
    return plainToInstance(ParamsRequest, obj) as ParamsRequest;
  }
}
