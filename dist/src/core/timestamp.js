"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = void 0;
const Result_1 = require("../utils/Result");
class Timestamp {
    constructor(props) {
        this.props = props;
    }
    get value() {
        return this.props.timestamp;
    }
    static isValidTimeStamp(timestamp) {
        const valid = (new Date(timestamp)).getTime() > 0;
        return valid;
    }
    static create(props) {
        if (!this.isValidTimeStamp(props.timestamp)) {
            return Result_1.Result.fail('Invalid TimeStamp');
        }
        else {
            return Result_1.Result.ok(new Timestamp({ timestamp: props.timestamp }));
        }
    }
}
exports.Timestamp = Timestamp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXN0YW1wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvdGltZXN0YW1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRDQUF5QztBQU16QyxNQUFhLFNBQVM7SUFPbEIsWUFBb0IsS0FBb0I7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUxELElBQUksS0FBSztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUtNLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFnQjtRQUMxQyxNQUFNLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sS0FBSyxDQUFBO0lBQ2pCLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQW9CO1FBRXJDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdDLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBWSxtQkFBbUIsQ0FBQyxDQUFDO1NBRWxEO2FBQU07WUFDUCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQ1osSUFBSSxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQ2hELENBQUM7U0FDRDtJQUVMLENBQUM7Q0FFSjtBQTdCRCw4QkE2QkMifQ==