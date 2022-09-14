"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const request = require("supertest");
describe("GET /howold", () => {
    it("Should Respond with 400 if Dob is not set or invalid", async () => {
        const response = await request(app_1.app).get("/howold");
        expect(response.status).toBe(400);
    }),
        it("Should Respond with 400 if Dob is not set or invalid", async () => {
            const response = await request(app_1.app).get("/howold?dob=Nan");
            expect(response.status).toBe(429);
        }),
        it("Should Respond with 200 if Dob is valid", async () => {
            setTimeout(async () => {
                const response = await request(app_1.app).get("/howold?dob=893804400000");
                console.log(response);
                expect(response.status).toBe(200);
            }, 3000);
        });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG93b2xkLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdHMvaG93b2xkLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnQ0FBNkI7QUFFN0IsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxzREFBc0QsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNwRSxNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxTQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDO1FBQ0EsRUFBRSxDQUFDLHNEQUFzRCxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ3BFLE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTyxDQUFDLFNBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzNELE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQztRQUNGLEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRSxLQUFLLElBQUksRUFBRTtZQUN2RCxVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3BCLE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTyxDQUFDLFNBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUV0QixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=