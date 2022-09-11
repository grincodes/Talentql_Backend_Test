"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateAgeController = void 0;
const dob_1 = require("../core/dob");
const timestamp_1 = require("../core/timestamp");
const baseController_1 = require("./baseController");
class CalculateAgeController extends baseController_1.BaseController {
    constructor() {
        super();
    }
    async executeImpl() {
        const timestamp = parseInt(this.req.params.dob);
        let dobOrError = timestamp_1.Timestamp.create({ timestamp });
        if (dobOrError.isFailure) {
            return this.clientError(dobOrError.error);
        }
        let age = dob_1.Dob.getCurrentAge(dobOrError.getValue());
        return this.ok(this.res, age);
    }
}
exports.CalculateAgeController = CalculateAgeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlQWdlQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9jYWxjdWxhdGVBZ2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFDQUFrQztBQUNsQyxpREFBOEM7QUFDOUMscURBQWtEO0FBRWxELE1BQWEsc0JBQXVCLFNBQVEsK0JBQWM7SUFDeEQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFDRCxLQUFLLENBQUMsV0FBVztRQUNmLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVoRCxJQUFJLFVBQVUsR0FBRyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFakQsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBZSxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLEdBQUcsR0FBRyxTQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjtBQWhCRCx3REFnQkMifQ==