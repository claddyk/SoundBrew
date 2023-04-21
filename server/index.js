import express from "express";
import { DATABASE_KEY } from "./config.js";
import mongoose from "mongoose";
import { signin, signup } from "./controllers/auth.js";

const app = express();

mongoose
  .connect(DATABASE_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen("8000", (req, res) => {
  console.log("server listening");
});

app.post("signup", signup);
app.post("signin",signin);