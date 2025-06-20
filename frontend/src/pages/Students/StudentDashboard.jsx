import React, { useState } from 'react'
import './StudentDashboard.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from './../../components/Modal/Modal';
import StudentModal from './StudentModal/StudentModal';
const StudentDashboard = () => {
      const [modal, setModal] = useState(false);
       const handleOnOfModal = (item) => {
        setModal(prev => !prev)
    }
  return (
    <div className='student-dashboard'>
     <div className='student-info'>
        <div className='welcome-user'>Welcome, <span>Student</span></div>
        <div className='welcome-user'>123</div>
        <div className='welcome-user'>shruti@gmail.com</div>
     </div>
     <div className='student-data'>
     <div className='student-data-header'>
       <div className='student-header-title'>View</div>
       <div className='student-header-title'>Date</div>
     </div>

     <div className='student-row-items'>
      <div className='student-row-item'>
       <div onClick={()=>handleOnOfModal()}><RemoveRedEyeIcon sx={{cursor:"pointer"}}/></div>
       <div>12-12-2024</div>
      </div>
     </div>
     </div>
     {
        modal &&     <Modal header={"Details"} handleClose={handleOnOfModal} children={<StudentModal/>}/>

     }
    </div>
  )
}

export default StudentDashboard