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
        console.log(params);
        const err = await (0, ErrorExtractor_1.validateAndError)(params);
        if (err) {
            console.log(err);
            return this.clientError(err.errMsg);
        }
        else {
            const age = (0, date_fns_1.differenceInYears)(new Date(), new Date(Number(params.dob)));
            return this.ok(this.res, age);
        }
    }
}
exports.CalculateAgeController = CalculateAgeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlQWdlQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9jYWxjdWxhdGVBZ2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUF1RDtBQUV2RCwrQ0FBbUQ7QUFFbkQsNERBQTJEO0FBQzNELHFEQUFrRDtBQUVsRCxNQUFhLHNCQUF1QixTQUFRLCtCQUFjO0lBQ3hEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBQ0QsS0FBSyxDQUFDLFdBQVc7UUFDZixNQUFNLE1BQU0sR0FBRyxzQkFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQStCLENBQUMsQ0FBQztRQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBCLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSxpQ0FBZ0IsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUUzQyxJQUFJLEdBQUcsRUFBRTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0wsTUFBTSxHQUFHLEdBQUcsSUFBQSw0QkFBaUIsRUFBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztDQUNGO0FBbEJELHdEQWtCQyJ9