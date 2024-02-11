import React from 'react'
import './CSS/signup.css'
import { Link } from 'react-router-dom';
const Signup = () => {





  
  return (

    <div className='loginsignup'>
      <div className="loginsignup-container">
        <div className='loginsignup-container-title'>
          <h1>Signup </h1>
        </div>


        <div className="loginsignup-fields">
          <label htmlFor="firstName">First Name</label>
          <div className='loginsignup-container-title'>
            <input type="text" placeholder='First Name' />
          </div>

          <label htmlFor="lastName">Last Name</label>
          <div className='loginsignup-container-title'>
            <input type="text" placeholder='Last Name' />
          </div>

          <label htmlFor="email">E-mail</label>
          <div className='loginsignup-container-title'>
            <input type="email" placeholder='Email Address' />
          </div>

          <label htmlFor="password">Password</label>
          <div className='loginsignup-container-title'>
            <input type="password" placeholder='Password' />
          </div>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className='loginsignup-container-title'>
            <input type="password" placeholder='Confirm Password' />
          </div>
        </div>

        <button className='loginsignup-button'>Sign Up</button>
     
        <p className="loginsignup-login">
          Already have an Account, <Link to="/login">Login</Link> here.
        </p>
        {/* <Login/> */}
        {/* <div className="loginsignup-agree">
      <input type="checkbox" name="" id="" />
      <p>By Continuing, i agree to the terms of use  and Privacy policy </p>
    </div> */}
      </div>
    </div>

  )
}

export default Signup