import React, { useState } from "react";
import axios from "axios";

export const Login =() => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (req, res) => {
    try{
    await axios.post("http://localhost:8000/signin", { email, password },
    { withCredentials: true });
    
    }
    catch(e){
     console.log(e)
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </>
  );
};
