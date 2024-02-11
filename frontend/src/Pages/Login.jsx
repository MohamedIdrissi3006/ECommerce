import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CSS/Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {


    if (!email || !password) {
      toast.warning('Please Fill all The Fields', {
        position: 'bottom-center',
        autoClose: 5000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'login-error-toast', // Custom class for styling
      });
      return;
    }


    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Make a request to your backend API to authenticate the user
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API_URL}/login`,
        { email, password },
        config
      );

      // Log the entire response object
      console.log('Full response:', response);

      // Assuming your backend responds with a user object and a token
      const user = response.data;
      navigate("/");

    } catch (error) {
      console.log(error)
      toast.error('Error: Something went wrong! ❌', {
        position: 'bottom-center',
        autoClose: 5000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'login-error-toast', // Custom class for styling
      });
    }
  };

  const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_BACKEND_API_URL}/auth/google`,
			"_self"
		);
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
            <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <label for="password">Password</label>
          <div className='loginsignup-container-title'>
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>

        <button className='loginsignup-button' onClick={handleLogin}>Login</button>
        <ToastContainer

        />
        <div className="loginsignup-container-title2">
          <button class="login-with-google-btn" onClick={googleAuth} >
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