// import { app } from "../app";

// const request = require("supertest");

// describe("GET /howold", () => {
//   it("Should Respond with 400 if Dob is not set or invalid", async () => {
//     const response = await request(app).get("/howold");
//     expect(response.status).toBe(400);
//   }),
//     it("Should Respond with 400 if Dob is not set or invalid", async () => {
//       const response = await request(app).get("/howold?dob=Nan");
//       expect(response.status).toBe(429);
//     }),
//     it("Should Respond with 200 if Dob is valid", async () => {
//       setTimeout(async () => {
//         const response = await request(app).get("/howold?dob=893804400000");
//         console.log(response);

//         expect(response.status).toBe(200);
//       }, 3000);
//     });
// });
