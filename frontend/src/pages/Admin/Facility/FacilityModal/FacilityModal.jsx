import React, { useState } from 'react'
import './FacilityModal.css'
const FacilityModal = () => {
  const [inputField, setInputField] = useState({ title: "", description: "" });
    const handleOnChange = (event, key) => {
        setInputField({ ...inputField, [key]: event.target.value });
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }

   
  return (
    <div className='facility-modal'> 
     <form className='register-form' onSubmit={handleSubmit}>
       <div className=''>
       <div className='register-input-box'>
         <input value={inputField.title} onChange={(event)=>handleOnChange(event,"title")} className='input-box-register' placeholder='Title' type="text" />
         </div>

        <div className='register-input-box' style={{marginTop:20}}>
        <textarea value={inputField.description} onChange={(event)=>handleOnChange(event,"description")} cols={450} rows={10} type='text' className='input-box-register' placeholder='Description'/>
         </div>

        </div>

       
       
       
       <button type="submit" className='form-btn reg-btn'>Add</button>
      
      </form>
    </div>
  )
}

export default FacilityModal