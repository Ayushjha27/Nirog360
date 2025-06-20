import React, { useState } from 'react'
import './ManageStaff.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const ManageStaff = () => {
   const [inputField, setInputField] = useState({ name: "", email: "", password: "", designation: "", mobileNo: "" })
    const [staffs, setStaffs] = useState([])
    const [clickedStaff, setClickedStaff] = useState(null);

    const handleOnChange = (event, key) => {
        setInputField({ ...inputField, [key]: event.target.value })
    }
  return (
    <div className='add-staffs-box'>
        <form className='register-form'>
            <div className='register-form-div'>
                <div className='register-input-box'>
                  <input value={inputField.name} onChange={(event)=>handleOnChange(event,"name")} className='input-box-register' type='text' placeholder='Staff Name'/>
                </div>
                 <div className='register-input-box'>
                  <input  value={inputField.email} onChange={(event)=>handleOnChange(event,"email")}className='input-box-register' type='text' placeholder='Email Id'/>
                </div>
                 <div className='register-input-box'>
                  <input  value={inputField.password} onChange={(event)=>handleOnChange(event,"password")} className='input-box-register' type='text' placeholder='Password'/>
                </div>
                 <div className='register-input-box'>
                  <input  value={inputField.designation} onChange={(event)=>handleOnChange(event,"designation")} className='input-box-register' type='text' placeholder='Designation'/>
                </div>
                 <div className='register-input-box'>
                  <input value={inputField.mobileNo} onChange={(event)=>handleOnChange(event,"mobileNo")} className='input-box-register' type='text' placeholder='Mobile No'/>
                </div>


                
            </div>

        <button type="submit" className='form-btn reg-btn'>Add</button>
        </form>
         
         <div className='list-staffs'>
          <div className='list-staff'>
           <div>Shruti</div>
           <div className='list-staff-btns'>
           <div style={{cursor:"pointer"}}><EditIcon/></div>
           <div style={{cursor:"pointer"}}><DeleteIcon/></div>
           </div>
          </div>
         </div>
    </div>
  )
}

export default ManageStaff