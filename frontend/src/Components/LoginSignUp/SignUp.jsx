import React from 'react'

const SignUp = () => {
    return (
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
  
        <label htmlFor="username">Username</label>
        <div className='loginsignup-container-title'>
          <input type="tel" placeholder='Username' />
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
    )
}

export default SignUp