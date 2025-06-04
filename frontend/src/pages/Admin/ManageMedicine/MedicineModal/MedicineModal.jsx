import React from 'react'
import './MedicineModal.css'
const MedicineModal = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='register-form-div'>
       <div className='register-input-box'>
         <input className='input-box-register' placeholder='Medicine Name' type="text" />
       </div>
       <div className='register-input-box'>
         <input className='input-box-register' placeholder='Quantity' type="number" />
       </div>
       <div className='register-input-box'>
         <input className='input-box-register' placeholder='Usage' type="email" />
       </div>
       </div>
              <button type="submit" className='form-btn reg-btn'>Add</button>

    </form>
  )
}

export default MedicineModal