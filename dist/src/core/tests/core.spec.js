"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dob_1 = require("../dob");
const timestamp_1 = require("../timestamp");
describe("Core Domain", () => {
    beforeEach(() => { });
    it("should return false for invalid timestamp", () => {
        let res = timestamp_1.Timestamp.isValidTimeStamp(8990909999999999879878676765);
        expect(res).toBeFalsy();
    });
    it("should return true for a valid timestamp", () => {
        let res = timestamp_1.Timestamp.isValidTimeStamp(new Date().getTime());
        expect(res).toBeTruthy();
    });
    it("should return  current age from date of birth timestamp", () => {
        let dob = new Date("2012-02-26").getTime();
        let timestampDob = timestamp_1.Timestamp.create({ timestamp: dob });
        let age = dob_1.Dob.getCurrentAge(timestampDob.getValue());
        expect(age).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdGVzdHMvY29yZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0NBQTZCO0FBQzdCLDRDQUF5QztBQUV6QyxRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUMzQixVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFFckIsRUFBRSxDQUFDLDJDQUEyQyxFQUFFLEdBQUcsRUFBRTtRQUNuRCxJQUFJLEdBQUcsR0FBRyxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFLEdBQUcsRUFBRTtRQUNsRCxJQUFJLEdBQUcsR0FBRyxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseURBQXlELEVBQUUsR0FBRyxFQUFFO1FBQ2pFLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTNDLElBQUksWUFBWSxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFeEQsSUFBSSxHQUFHLEdBQUcsU0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==