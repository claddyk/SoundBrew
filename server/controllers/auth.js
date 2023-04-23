import express from "express";
const app = express();
import { User } from "../schemas/auth.js";
import cookieParser from 'cookie-parser'
import bcrypt from "bcrypt";
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
export const signup = async (req, res) => {
   
  try{
    const {username,email,password} = req.body;
  res.send(req.body)
  const hashedPassword = await bcrypt.hash(password, 10);

  const userdoc = new User({
    username: username,
    email: email,
    password: hashedPassword,
    confirmPassword: hashedPassword,
  });
  const result = await userdoc.save();
 
  console.log(result);
}
catch(e){
  console.log(e);
}
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  const userdoc = await User.findOne({ email });
  if (userdoc) {
    console.log("userFound");
    console.log(userdoc);
    if (await bcrypt.compare(password, userdoc.confirmPassword)) {
      console.log("login successfully");
      const token = await userdoc.generateAuthToken();

      console.log("the token is " + token);
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
      });
      res.status(200).json({ message: "login successful", jwtToken: token });
    } else console.log("Invalid Password");
  } else {
    console.log("invalid user");
  }
};