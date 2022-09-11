"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dob_1 = require("../dob");
const timestamp_1 = require("../timestamp");
describe('Core Domain', () => {
    beforeEach(() => {
    });
    it('should return false for invalid timestamp', () => {
        let res = timestamp_1.Timestamp.isValidTimeStamp(9098098989898900);
        expect(res).toBeFalsy();
    });
    it('should return true for a valid timestamp', () => {
        let res = timestamp_1.Timestamp.isValidTimeStamp(new Date().getTime());
        expect(res).toBeTruthy();
    });
    it('should return  current age from date of birth timestamp', () => {
        let dob = (new Date("2012-02-26")).getTime();
        let timestampDob = timestamp_1.Timestamp.create({ timestamp: dob });
        let age = dob_1.Dob.getCurrentAge(timestampDob.getValue());
        expect(age).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdGVzdHMvY29yZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0NBQTZCO0FBQzdCLDRDQUF5QztBQUV6QyxRQUFRLENBQUMsYUFBYSxFQUFDLEdBQUUsRUFBRTtJQUV2QixVQUFVLENBQUMsR0FBRSxFQUFFO0lBRWYsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsMkNBQTJDLEVBQUMsR0FBRSxFQUFFO1FBRS9DLElBQUksR0FBRyxHQUFHLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUUsMENBQTBDLEVBQUUsR0FBRSxFQUFFO1FBQzVDLElBQUksR0FBRyxHQUFHLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNoQyxDQUFDLENBQUUsQ0FBQTtJQUVGLEVBQUUsQ0FBRSx5REFBeUQsRUFBRSxHQUFFLEVBQUU7UUFFNUQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRzdDLElBQUksWUFBWSxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLEVBQUMsU0FBUyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUE7UUFFcEQsSUFBSSxHQUFHLEdBQUcsU0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUNwRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRXRDLENBQUMsQ0FBRSxDQUFBO0FBR1AsQ0FBQyxDQUFDLENBQUEifQ==