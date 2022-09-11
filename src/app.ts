import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import { calculateAgeController } from "./controllers";
import rateLimit from "express-rate-limit";

const apiLimiter = rateLimit({
  windowMs: 1000, // 1 sec
  max: 3, // Limit each IP to 3 requests per `window` (here, per sec)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const app = express();
app.use(apiLimiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Yo i am up");
});

app.get("/howold", apiLimiter, (req: Request, res: Response) =>
  calculateAgeController.execute(req, res)
);

app.listen(process.env.PORT || 4000, () => {
  console.log(`[App]: Server listening on 4000`);
});

export { app };
