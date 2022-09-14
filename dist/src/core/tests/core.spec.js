"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dob_1 = require("../dob");
describe("Core Domain", () => {
    beforeEach(() => { });
    it("should return false for invalid timestamp", () => {
        let res = dob_1.Dob.isValidTimeStamp(8990909999999999879878676765);
        expect(res).toBeFalsy();
    });
    it("should return true for a valid timestamp", () => {
        let res = dob_1.Dob.isValidTimeStamp(new Date().getTime());
        expect(res).toBeTruthy();
    });
    it("should return  current age from date of birth timestamp", () => {
        let dob = new Date("2012-02-26").getTime();
        let age = dob_1.Dob.getCurrentAge(dob);
        expect(age).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdGVzdHMvY29yZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0NBQTZCO0FBRTdCLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzNCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUVyQixFQUFFLENBQUMsMkNBQTJDLEVBQUUsR0FBRyxFQUFFO1FBQ25ELElBQUksR0FBRyxHQUFHLFNBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUlILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRSxHQUFHLEVBQUU7UUFDbEQsSUFBSSxHQUFHLEdBQUcsU0FBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseURBQXlELEVBQUUsR0FBRyxFQUFFO1FBQ2pFLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNDLElBQUksR0FBRyxHQUFHLFNBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=