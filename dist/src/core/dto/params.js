"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamsRequest = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ParamsRequest {
    static from(obj = {}) {
        if (!obj)
            obj = {};
        return (0, class_transformer_1.plainToInstance)(ParamsRequest, obj);
    }
}
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], ParamsRequest.prototype, "dob", void 0);
exports.ParamsRequest = ParamsRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvZHRvL3BhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxREFBaUQ7QUFDakQseURBQW9EO0FBRXBELE1BQWEsYUFBYTtJQUlqQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQThCLEVBQUU7UUFDakQsSUFBSSxDQUFDLEdBQUc7WUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sSUFBQSxtQ0FBZSxFQUFDLGFBQWEsRUFBRSxHQUFHLENBQWtCLENBQUM7SUFDOUQsQ0FBQztDQUNGO0FBUEM7SUFBQyxJQUFBLGdDQUFjLEdBQUU7OzBDQUNFO0FBRnJCLHNDQVFDIn0=