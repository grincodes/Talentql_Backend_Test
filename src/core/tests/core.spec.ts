import { Dob } from "../dob";
import { Timestamp } from "../timestamp";

describe('Core Domain',()=>{

    beforeEach(()=>{
        
    })

    it('should return false for invalid timestamp',()=>{

        let res = Timestamp.isValidTimeStamp(9098098989898900);
        expect(res).toBeFalsy()
    })

    it ('should return true for a valid timestamp', ()=>{
            let res = Timestamp.isValidTimeStamp(new Date().getTime());
            expect(res).toBeTruthy()
    } )

     it ('should return  current age from date of birth timestamp', ()=>{
        
            let dob = (new Date("2012-02-26")).getTime();
           
            
            let timestampDob = Timestamp.create({timestamp:dob})

            let age = Dob.getCurrentAge(timestampDob.getValue())
            expect(age).toBeGreaterThan(0)

    } )

    
})