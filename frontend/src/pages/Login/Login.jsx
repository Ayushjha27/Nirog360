import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='login-page'>
        <div className='login-page-card'> 
        <div className='card-header-form'>
            Login
        </div>
        <div className='form-input-fields'>
            <input className='form-input' type="email" placeholder='Email '/>
            <input className='form-input' type="password" placeholder='Password '/>
            <div className='form-btn'>Login</div>
        </div>
        <div className='forgot-password-link'>Forgot Password ?</div>
        </div>

        <div className='signup-page-card'> 
        <div className='card-header-form'>
            Register
        </div>
        <div className='form-input-fields'>
            <input className='form-input' type="text" placeholder='Your Name'/>
            <input className='form-input' type="email" placeholder='Email '/>
            <input className='form-input' type="password" placeholder='Your Password '/>
            <input className='form-input' type="text" placeholder='Your Roll No '/>

            <div className='form-btn'>Sign Up</div>
        </div>
        </div>


    </div>
  )
}

export default Login