import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import activiteRoutes from "./Routes/Activite.route.js";
import ratingActivite from "./Routes/Rating.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World with Express"));
app.use("/activite", activiteRoutes);
app.use("/rating", ratingActivite);

const hostname = process.env.DEVURL;
const port = process.env.PORT || 3333;

mongoose.set("debug", process.env.NODE_ENV === "dev");
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://127.0.0.1/EcoLinkDB")
  .then(() => {
    console.log(`Connected to database`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, async () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
