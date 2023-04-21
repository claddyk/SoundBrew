import React from 'react'
import "./signup.css" 
const Signup = () => {
  return (
    <div className='signup'>
        
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required></input>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required></input>
    </div>
  )
}

export default Signup