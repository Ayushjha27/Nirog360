import React, { useState } from 'react'
import './Login.css'
const Login = () => {
    const [forgotPassword, setForgotPassword] = useState(false);
    const [loginField, setLoginField] = useState({ email: "", password: "" });
    const [registerField, setRegisterField] = useState({ name: "", email: "", password: "", roll: "" });

     const handleOnChange = (event, key, card) => {
        if (card === "login") {
            setLoginField({ ...loginField, [key]: event.target.value })
        } else {
            setRegisterField({ ...registerField, [key]: event.target.value })
        }
    }
    // console.log(loginField);
    // console.log(registerField)
  return (
    <div className='login-page'>
        <div className='login-page-card'> 
        <div className='card-header-form'>
            Login
        </div>
        <div className='form-input-fields'>
            <input value={loginField.email} onChange={(event) => handleOnChange(event,'email','login')} className='form-input' type="email" placeholder='Email '/>
            <input  value={loginField.password} onChange={(event) => handleOnChange(event,'password','login')} className='form-input' type="password" placeholder='Password '/>
            <div className='form-btn'>Login</div>
        </div>
        <div className='forgot-password-link'>Forgot Password ?</div>
        </div>

        <div className='signup-page-card'> 
        <div className='card-header-form'>
            Register
        </div>
        <div className='form-input-fields'>
            <input value={registerField.name} onChange={(event) => handleOnChange(event,'name','register')} className='form-input' type="text" placeholder='Your Name'/>
            <input value={registerField.email} onChange={(event) => handleOnChange(event,'email','register')} className='form-input' type="email" placeholder='Email '/>
            <input value={registerField.password} onChange={(event) => handleOnChange(event,'password','register')} className='form-input' type="password" placeholder='Your Password '/>
            <input value={registerField.roll} onChange={(event) => handleOnChange(event,'roll','register')} className='form-input' type="text" placeholder='Your Roll No '/>

            <div className='form-btn'>Sign Up</div>
        </div>
        </div>


    </div>
  )
}

export default Login