"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateAgeController = void 0;
const date_fns_1 = require("date-fns");
const params_1 = require("../core/dto/params");
const ErrorExtractor_1 = require("../utils/ErrorExtractor");
const baseController_1 = require("./baseController");
class CalculateAgeController extends baseController_1.BaseController {
    constructor() {
        super();
    }
    async executeImpl() {
        const params = params_1.ParamsRequest.from(this.req.query);
        const err = await (0, ErrorExtractor_1.validateAndError)(params);
        if (err) {
            return this.clientError(err.errMsg);
        }
        else {
            const age = (0, date_fns_1.differenceInYears)(new Date(), new Date(Number(params.dob)));
            return this.ok(this.res, age);
        }
    }
}
exports.CalculateAgeController = CalculateAgeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlQWdlQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9jYWxjdWxhdGVBZ2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUF1RDtBQUV2RCwrQ0FBbUQ7QUFFbkQsNERBQTJEO0FBQzNELHFEQUFrRDtBQUVsRCxNQUFhLHNCQUF1QixTQUFRLCtCQUFjO0lBQ3hEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBQ0QsS0FBSyxDQUFDLFdBQVc7UUFDZixNQUFNLE1BQU0sR0FBRyxzQkFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQStCLENBQUMsQ0FBQztRQUU1RSxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsaUNBQWdCLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDTCxNQUFNLEdBQUcsR0FBRyxJQUFBLDRCQUFpQixFQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0NBQ0Y7QUFmRCx3REFlQyJ9