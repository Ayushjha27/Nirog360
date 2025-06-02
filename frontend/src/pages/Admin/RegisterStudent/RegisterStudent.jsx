import React, { useState } from 'react'
import './RegisterStudent.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import SearchBox from '../../../components/SearchBox/SearchBox';
import Modal from '../../../components/Modal/Modal';
import Report from './Report/Report';
const RegisterStudent = () => {

    const [searchStudent, setSearchStudent] = useState("");
    const [reportModal, setReportModal] = useState(false)

    
   

    const openCloseModal = ()=>{
        setReportModal(prev=>!prev)
    }


    const handleOnChange = (value)=>{
        setSearchStudent(value)
    }
      const handleSubmit = (e)=>{
        e.preventDefault();
    }

    
  return (
    <div className='register-student'>
     <div className='go-back'><Link to={'/admin/dashboard'}><ArrowBackIcon/> Back To Dashboard</Link> </div>

     <SearchBox placeholder={"Search By Roll No."} value={searchStudent} onChange={handleOnChange}/>

     <div className='register-form-block'>
      <div className='register-form-header'>
       Register Student
      </div>
      <form className='register-form' onSubmit={handleSubmit}>
       <div className='register-form-div'>
       <div className='register-input-box'>
         <input className='input-box-register' placeholder='Student Name' type="text" />
       </div>
       <div className='register-input-box'>
         <input className='input-box-register' placeholder='Email' type="text" />
       </div>
       <div className='register-input-box'>
         <input className='input-box-register' placeholder='Roll No' type="email" />
       </div>
       <div className='register-input-box'>
         <input className='input-box-register' placeholder='Mobile No' type="number" />
       </div>
       <div className='register-input-box'>
         <input className='input-box-register' placeholder='Father Name' type="text" />
       </div>
       <div className='register-input-box'>
         <input className='input-box-register' placeholder='Father Mobile No' type="number" />
       </div>
       <div className='register-input-box'>
         <input className='input-box-register' placeholder='Address' type="text" />
       </div>
       <div className='register-input-box'>
         <input className='input-box-register' placeholder='Previous health issue' type="text" />
       </div>
        <div className='register-input-box'>
         <input className='input-box-register' placeholder='Age' type="number" />
       </div>
        <div className='register-input-box'>
         <input className='input-box-register' placeholder='Blood Group' type="text" />
       </div>
       </div>
       <button type="submit" className='form-btn reg-btn'>Register</button>
       <div className='block-divs'>
        <button type="submit" className='form-btn reg-btn'>Update</button>
         <button type="submit" className='form-btn reg-btn' onClick={openCloseModal}>Report</button>

       </div>
      </form>
     </div>
     {reportModal && <Modal header="Report" handleClose={openCloseModal} children={<Report/>}/>}
    </div>
  )
}

export default RegisterStudent