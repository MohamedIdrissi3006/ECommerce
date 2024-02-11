import React from 'react'
import './Login.css'
const Login = () => {
   return (
    <div className='loginsignup'>
    <div className="loginsignup-container">
      <div className='loginsignup-container-title'>
        <h1>Login</h1>
      </div>

      
      <div className="loginsignup-fields">
        <label for="username">Username</label>
        <div className='loginsignup-container-title'>
          <input type="email" placeholder='Email Address' />
        </div>
        <label for="password">Password</label>
        <div className='loginsignup-container-title'>
          <input type="password" placeholder='Password' />
        </div>
      </div>

      <button className='loginsignup-button'>Login</button>
      <div className="loginsignup-container-title2">
      <button type="button" class="login-with-google-btn" >
        Sign in with Google
      </button>
      </div>
      <p className="loginsignup-login">
        Already have an acount ? <span>Login</span>
      </p>
      {/* <Login/> */}
      {/* <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
        <p>By Continuing, i agree to the terms of use  and Privacy policy </p>
      </div> */}
    </div>
  </div>
      );

       
 
}

export default Login