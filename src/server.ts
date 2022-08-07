import express, { Request, Response, NextFunction } from "express";
import db from "./config/database.config";
import router from "./routes";

db.sync()
  .then(() => {
    console.log("connecting to database");
  })
  .catch((err) => console.log(err));

const app = express();
const port = process.env.PORT || 5105;
app.use(express.json());
app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
