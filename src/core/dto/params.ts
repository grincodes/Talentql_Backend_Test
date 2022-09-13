import { IsDate} from "class-validator"
import { plainToInstance } from "class-transformer"

export class ParamsRequest{
    
    @IsDate({})
    public dob:string

    
    public static from(obj:Record<string,string> = {} ){
        if (!obj) obj = {};
        return plainToInstance(ParamsRequest,obj) as ParamsRequest
    }

    

}