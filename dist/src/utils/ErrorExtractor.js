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
            errMsg: `Please incorrect fields was passed, please check and try again`,
        };
    }
    return null;
}
exports.extractAndThrowError = extractAndThrowError;
async function validateAndError(res, data) {
    const errors = await (0, class_validator_1.validate)(data);
    const response = extractAndThrowError(errors);
    if (response == null) {
        return;
    }
    res.status(400).json(response);
}
exports.validateAndError = validateAndError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JFeHRyYWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvRXJyb3JFeHRyYWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQTREO0FBRzVELFNBQWdCLG9CQUFvQixDQUFDLE1BQXlCO0lBQzVELElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDckIsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQy9CLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxPQUFPO2dCQUNMLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtnQkFDcEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNyQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsTUFBTSxFQUFFLE9BQU87WUFDZixNQUFNLEVBQUUsZ0VBQWdFO1NBQ3pFLENBQUM7S0FDSDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQWpCRCxvREFpQkM7QUFFTSxLQUFLLFVBQVUsZ0JBQWdCLENBQUMsR0FBYSxFQUFFLElBQVM7SUFDN0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLDBCQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsTUFBTSxRQUFRLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1FBQ3BCLE9BQU87S0FDUjtJQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFQRCw0Q0FPQyJ9