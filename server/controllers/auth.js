import express from 'express';
import { User } from '../schemas/auth.js';
import bcrypt from 'bcrypt'

const app = express();

export const signup = async(req,res)=>{
     const {username, email,password} = req.body
     const hashedPassword = await bcrypt.hash(password,10);

     
     const userdoc = User({
        username:username,
        email:email,
        password:hashedPassword,
        confirmPassword:hashedPassword
     })
     const result =  await userdoc.save();
     console.log(result)
      
    
}

export const signin = async(req,res)=>{
      const {email , password} = req.body;
      const userdoc = await User.findOne({email});
      if(userdoc){
        console.log("userFound")
        if(bcrypt.compare(password,userdoc.password)){
          console.log("login successfully")
          
            
        }
        else console.log("Invalid Password");
      }
      else{
        console.log("invalid user")
      }



}