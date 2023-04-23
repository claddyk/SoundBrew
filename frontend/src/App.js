import React from 'react';
import { Login } from './testingcomponents/Login.js';
import { SignUp } from './testingcomponents/Signup.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./testingcomponents/Home.js";
import AdminPannel from './testingcomponents/AdminPannel.js';




function App() {
  return (
    <div className="App">
    
     <Router>
      <Routes>
        <Route exact path="/signup" element={<SignUp></SignUp>}></Route>
        <Route exact path = "/signin" element={<Login></Login>}></Route>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/adminpannel" element={<AdminPannel></AdminPannel>}></Route>

      </Routes>
     </Router>
    </div>
  )
}

export default App