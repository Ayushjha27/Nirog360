import React from 'react'
import './NearByModal.css'
const NearByModal = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
         <form className='register-form' onSubmit={handleSubmit}>
       <div className='register-form-div'>
       <div className='register-input-box'>
         <input className='input-box-register' placeholder='Name' type="text" />
       </div>
       <div className='register-input-box'>
         <input className='input-box-register' placeholder='Address' type="text" />
       </div>
       <div className='register-input-box'>
         <input className='input-box-register' placeholder='Contact' type="number" />
       </div>
       </div>
       <button type="submit" className='form-btn reg-btn'>Add</button>
      </form>

  )
}

export default NearByModal