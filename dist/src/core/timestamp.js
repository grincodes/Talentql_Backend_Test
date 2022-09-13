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
        const valid = new Date(timestamp).getTime() > 0;
        return valid;
    }
    static create(props) {
        if (!this.isValidTimeStamp(props.timestamp)) {
            return Result_1.Result.fail("Invalid TimeStamp");
        }
        else {
            return Result_1.Result.ok(new Timestamp({ timestamp: props.timestamp }));
        }
    }
}
exports.Timestamp = Timestamp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXN0YW1wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvdGltZXN0YW1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRDQUF5QztBQU16QyxNQUFhLFNBQVM7SUFNcEIsWUFBb0IsS0FBcUI7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUxELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUtNLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFpQjtRQUM5QyxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFxQjtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMzQyxPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQVksbUJBQW1CLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0wsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUNkLElBQUksU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUM5QyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0NBQ0Y7QUF4QkQsOEJBd0JDIn0=