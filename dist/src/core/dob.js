"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dob = void 0;
class Dob {
    static getCurrentAge(timestamp) {
        var dob = new Date(timestamp.value);
        var now = new Date();
        var age = now.getFullYear() - dob.getFullYear();
        return age;
    }
}
exports.Dob = Dob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9iLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvZG9iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsR0FBRztJQUNQLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBb0I7UUFDOUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFckIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVoRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRjtBQVRELGtCQVNDIn0=