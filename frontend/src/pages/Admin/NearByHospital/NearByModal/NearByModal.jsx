import React, { useState } from 'react'
import './NearByModal.css'
const NearByModal = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

      const [inputField, setInputField] = useState({ name: "", address: "", contact: "" });

    const handleOnChange = (event, key) => {
        setInputField({ ...inputField, [key]: event.target.value })
    }

  return (
         <form className='register-form' onSubmit={handleSubmit}>
       <div className='register-form-div'>
       <div className='register-input-box'>
         <input value={inputField.name} onChange={(event)=>handleOnChange(event,"name")} className='input-box-register' placeholder='Name' type="text" />
       </div>
       <div className='register-input-box'>
         <input value={inputField.address} onChange={(event)=>handleOnChange(event,"address")} className='input-box-register' placeholder='Address' type="text" />
       </div>
       <div className='register-input-box'>
         <input value={inputField.contact} onChange={(event)=>handleOnChange(event,"contact")}className='input-box-register' placeholder='Contact' type="text" />
       </div>
       </div>
       <button type="submit" className='form-btn reg-btn'>Add</button>
      </form>

  )
}

export default NearByModal