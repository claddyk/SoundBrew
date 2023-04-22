import React, { useState } from "react";
import axios from "axios";


export const SignUp = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/signup", {
        username,
        email,
        password,
      });
      console.log(response);

      console.log("request sent successfully");
    } catch (e) {
      console.log(e);
      console.log("error");
    }
  };
  return (
    <div>
      <h1>SignUp</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {
            setconfirmPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};




