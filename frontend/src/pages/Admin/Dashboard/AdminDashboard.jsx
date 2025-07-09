import React, { useState } from 'react'

import './AdminDashboard.css'

import Modal from '../../../components/Modal/Modal';

import ManageStaff from './ManageStaff/ManageStaff';

import ManageEvent from './ManageEvent/ManageEvent';

import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';


const AdminDashboard = (props) => {

  const [manageStaffModal, setManageStaffModal] = useState(false);
  const [eventModal, setEventModal] = useState(false)

  const openCloseModal = (value) => {

    if (value === "event") {
      setEventModal(prev => !prev);
    }
    else {

      setManageStaffModal(prev => !prev);
    }

  }

  let userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

  return (

    <div className='adminDashboard'>

      <div className='welcome-header'>

        <div className='welcome-admin'>
          Welcome To  {userInfo?.role === "staff" ? "Staff" : "Admin"}  Panel
        </div>

        <div className='welcome-admin-right-side'>
          {(userInfo?.role === "admin") &&
            <div className='manage-staff-btn' onClick={() => { openCloseModal("staff") }}>
              Manage Staffs
            </div>

          }

          <div className='manage-staff-btn' onClick={() => { openCloseModal("event") }}>
            Events
          </div>

        </div>

      </div>



      <div className='admin-dashboard-cards'>

        <Link to={'/admin/register-student'} className='admin-dashboard-card'>
          Register Student
        </Link>

        <Link to={'/admin/manage-medicine'} className='admin-dashboard-card'>
          Manage Medicines
        </Link>

        <Link to={'/admin/record'} className='admin-dashboard-card'>
          Records
        </Link>

        <Link to={'/admin/facility'} className='admin-dashboard-card'>
          Facilities
        </Link>

        <Link to={'/admin/nearByHospital'} className='admin-dashboard-card'>
          Near By Hospital
        </Link>

        <Link to={'/admin/gallary'} className='admin-dashboard-card'>
          Gallary
        </Link>

      </div>

      {manageStaffModal && <Modal value={"staff"} handleClose={openCloseModal} header={"Manage Staffs"} children={<ManageStaff showLoader={props.showLoader} hideLoader={props.hideLoader} />} />
      }


      {eventModal && <Modal value={"event"} handleClose={openCloseModal} header={"Manage Events"} children={<ManageEvent showLoader={props.showLoader} hideLoader={props.hideLoader} />} />}
    </div>

  )
}




export default AdminDashboard