"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const request = require("supertest");
describe("GET /howold", () => {
    it("Should Respond with 500 if Dob is not set or invalid", async () => {
        const response = await request(app_1.app).get("/howold");
        expect(response.status).toBe(400);
    }),
        it("Should Respond with 200 if Dob is valid", async () => {
            setTimeout(async () => {
                const response = await request(app_1.app).get("/howold?dob=893804400000");
                console.log(response);
                expect(response.status).toBe(200);
            }, 3000);
        });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG93b2xkLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdHMvaG93b2xkLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnQ0FBNkI7QUFFN0IsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxzREFBc0QsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNwRSxNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxTQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDO1FBQ0EsRUFBRSxDQUFDLHlDQUF5QyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ3ZELFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDcEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsU0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0JBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRXRCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==