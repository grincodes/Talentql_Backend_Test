"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dob = void 0;
const moment_1 = __importDefault(require("moment"));
class Dob {
    static getCurrentAge(timestamp) {
        var dob = timestamp.value;
        var _now = Date.now();
        var now = (0, moment_1.default)(_now);
        return now.diff(dob, 'years');
    }
}
exports.Dob = Dob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9iLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvZG9iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9EQUE0QjtBQUs1QixNQUFhLEdBQUc7SUFFTCxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQW1CO1FBQzNDLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksR0FBRyxHQUFHLElBQUEsZ0JBQU0sRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUV0QixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FFSjtBQVZELGtCQVVDIn0=