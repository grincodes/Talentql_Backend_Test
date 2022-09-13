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
        await (0, ErrorExtractor_1.validateAndError)(this.res, params);
        const age = (0, date_fns_1.differenceInYears)(new Date(), (0, date_fns_1.parseISO)(params.dob));
        console.log(this.req);
        return this.ok(this.res, age);
    }
}
exports.CalculateAgeController = CalculateAgeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlQWdlQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9jYWxjdWxhdGVBZ2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUF1RDtBQUV2RCwrQ0FBbUQ7QUFFbkQsNERBQTJEO0FBQzNELHFEQUFrRDtBQUVsRCxNQUFhLHNCQUF1QixTQUFRLCtCQUFjO0lBQ3hEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBQ0QsS0FBSyxDQUFDLFdBQVc7UUFDZixNQUFNLE1BQU0sR0FBRyxzQkFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQStCLENBQUMsQ0FBQztRQUM1RSxNQUFNLElBQUEsaUNBQWdCLEVBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6QyxNQUFNLEdBQUcsR0FBRyxJQUFBLDRCQUFpQixFQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBQSxtQkFBUSxFQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjtBQVpELHdEQVlDIn0=