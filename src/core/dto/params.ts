import { IsNumberString } from "class-validator";
import { plainToInstance } from "class-transformer";

export class ParamsRequest {
  @IsNumberString()
  public dob: string;

  public static from(obj: Record<string, string> = {}) {
    if (!obj) obj = {};
    return plainToInstance(ParamsRequest, obj) as ParamsRequest;
  }
}
