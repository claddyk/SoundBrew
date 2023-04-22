import express from "express";
import { DATABASE_KEY } from "./config.js";
import mongoose from "mongoose";
import { signin, signup } from "./controllers/auth.js";
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));
mongoose.set("strictQuery", false);
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

app.post("/signup", signup);
app.get("/signup",(req,res)=>{
  console.log("welcome")
  res.send('Welcome to my server!');
})
app.post("/signin",signin);