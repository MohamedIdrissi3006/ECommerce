import React, { useState } from 'react'
import './CSS/Login.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
const [email,setEmail] = useState('');
const [password,setPassword]  = useState('');


const handleLogin = async () => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    // Make a request to your backend API to authenticate the user
    const response = await axios.post('http://localhost/login', {
      email,
      password
    },config);

    // Assuming your backend responds with a user object and a token
    const user = response.data;

    // You can handle the user data, for example, store it in state or in a global state management solution
    console.log('User logged in:', user);

    // Redirect to another page or perform any other actions after successful login
  } catch (error) {
    // Handle login error
    console.error('Login failed:', error.response.data.message);
  }
};



  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <div className='loginsignup-container-title'>
          <h1>Login</h1>
        </div>


        <div className="loginsignup-fields">
          <label for="username">Username</label>
          <div className='loginsignup-container-title'>
            <input type="email" placeholder='Email Address' value={email}    onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <label for="password">Password</label>
          <div className='loginsignup-container-title'>
            <input type="password" placeholder='Password' value={password}    onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>

        <button className='loginsignup-button' onClick={handleLogin()}>Login</button>
        <div className="loginsignup-container-title2">
          <button class="login-with-google-btn" >
            Sign in with Google
          </button>
        </div>
        <p className="loginsignup-login">
        If you don't have an account, <Link to="/signup">Sign Up</Link> here.
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