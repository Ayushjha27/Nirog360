import React from 'react'
import './FacilityModal.css'
const FacilityModal = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
    }

   
  return (
    <div className='facility-modal'> 
     <form className='register-form' onSubmit={handleSubmit}>
       <div className=''>
       <div className='register-input-box'>
         <input className='input-box-register' placeholder='Title' type="text" />
         </div>

        <div className='register-input-box' style={{marginTop:20}}>
        <textarea cols={450} rows={10} type='text' className='input-box-register' placeholder='Description'/>
         </div>

        </div>

       
       
       
       <button type="submit" className='form-btn reg-btn'>Add</button>
      
      </form>
    </div>
  )
}

export default FacilityModal