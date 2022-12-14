"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAndError = exports.extractAndThrowError = void 0;
const class_validator_1 = require("class-validator");
function extractAndThrowError(errors) {
    if (errors.length > 0) {
        const payload = errors.map((e) => {
            const key = Object.keys(e.constraints || {})[0];
            return {
                property: e.property,
                error: key ? e.constraints[key] : "",
            };
        });
        return {
            fields: payload,
            errMsg: `Please incorrect dob was passed, please check and try again`,
        };
    }
    return null;
}
exports.extractAndThrowError = extractAndThrowError;
async function validateAndError(data) {
    const errors = await (0, class_validator_1.validate)(data);
    const response = extractAndThrowError(errors);
    if (response == null) {
        return;
    }
    return { errMsg: response.errMsg };
}
exports.validateAndError = validateAndError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JFeHRyYWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvRXJyb3JFeHRyYWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQTREO0FBSTVELFNBQWdCLG9CQUFvQixDQUFDLE1BQXlCO0lBQzVELElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDckIsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQy9CLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxPQUFPO2dCQUNMLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtnQkFDcEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNyQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsTUFBTSxFQUFFLE9BQU87WUFDZixNQUFNLEVBQUUsNkRBQTZEO1NBQ3RFLENBQUM7S0FDSDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQWpCRCxvREFpQkM7QUFFTSxLQUFLLFVBQVUsZ0JBQWdCLENBQUMsSUFBUztJQUM5QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsMEJBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUVwQyxNQUFNLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7UUFDcEIsT0FBTztLQUNSO0lBQ0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDckMsQ0FBQztBQVJELDRDQVFDIn0=