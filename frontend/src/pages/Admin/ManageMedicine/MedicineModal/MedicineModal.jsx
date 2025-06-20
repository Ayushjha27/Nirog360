import React, { useState } from 'react'
import './MedicineModal.css'
const MedicineModal = () => {

   const [medicine, setMedicine] = useState({ name: "", quantity: "", usage: "" });
    const handleOnChange = (event, key) => {
        setMedicine({ ...medicine, [key]: event.target.value })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='register-form-div'>
       <div className='register-input-box'>
         <input value={medicine.name} onChange={(event)=>handleOnChange(event,"name")} className='input-box-register' placeholder='Medicine Name' type="text" />
       </div>
       <div className='register-input-box'>
         <input value={medicine.quantity} onChange={(event)=>handleOnChange(event,"quantity")} className='input-box-register' placeholder='Quantity' type="number" />
       </div>
       <div className='register-input-box'>
         <input value={medicine.usage} onChange={(event)=>handleOnChange(event,"usage")}className='input-box-register' placeholder='Usage' type="text" />
       </div>
       </div>
              <button type="submit" className='form-btn reg-btn'>Add</button>

    </form>
  )
}

export default MedicineModal