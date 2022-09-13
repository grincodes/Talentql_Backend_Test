"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dob = void 0;
const date_fns_1 = require("date-fns");
class Dob {
    static getCurrentAge(dob) {
        const age = (0, date_fns_1.differenceInYears)(new Date(), new Date(dob));
        return age;
    }
    static isValidTimeStamp(timestamp) {
        return new Date(timestamp).getTime() > 0;
    }
}
exports.Dob = Dob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9iLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvZG9iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUF1RDtBQUV2RCxNQUFhLEdBQUc7SUFDUCxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQVc7UUFDckMsTUFBTSxHQUFHLEdBQUcsSUFBQSw0QkFBaUIsRUFBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU0sTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQWlCO1FBQzlDLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQVRELGtCQVNDIn0=