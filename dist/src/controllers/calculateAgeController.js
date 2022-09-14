"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateAgeController = void 0;
const date_fns_1 = require("date-fns");
const dob_1 = require("../core/dob");
const params_1 = require("../core/dto/params");
const ErrorExtractor_1 = require("../utils/ErrorExtractor");
const baseController_1 = require("./baseController");
class CalculateAgeController extends baseController_1.BaseController {
    constructor() {
        super();
    }
    async executeImpl() {
        const params = params_1.ParamsRequest.from(this.req.query);
        console.log(params);
        const err = await (0, ErrorExtractor_1.validateAndError)(params);
        if (err) {
            console.log(err);
            return this.clientError(err.errMsg);
        }
        else if (!dob_1.Dob.isValidTimeStamp(Number(params.dob))) {
            return this.clientError("invalid timestamp value");
        }
        else {
            const age = (0, date_fns_1.differenceInYears)(new Date(), new Date(Number(params.dob)));
            return this.ok(this.res, age);
        }
    }
}
exports.CalculateAgeController = CalculateAgeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlQWdlQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9jYWxjdWxhdGVBZ2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUF1RDtBQUN2RCxxQ0FBa0M7QUFFbEMsK0NBQW1EO0FBRW5ELDREQUEyRDtBQUMzRCxxREFBa0Q7QUFFbEQsTUFBYSxzQkFBdUIsU0FBUSwrQkFBYztJQUN4RDtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUNELEtBQUssQ0FBQyxXQUFXO1FBQ2YsTUFBTSxNQUFNLEdBQUcsc0JBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUErQixDQUFDLENBQUM7UUFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsaUNBQWdCLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0MsSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckM7YUFBTSxJQUFJLENBQUMsU0FBRyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNwRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0wsTUFBTSxHQUFHLEdBQUcsSUFBQSw0QkFBaUIsRUFBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztDQUNGO0FBcEJELHdEQW9CQyJ9