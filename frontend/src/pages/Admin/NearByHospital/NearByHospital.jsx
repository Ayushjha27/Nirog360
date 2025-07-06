import React, { useState } from 'react'

import './NearByHospital.css'

import EditIcon from '@mui/icons-material/Edit';

import DeleteIcon from '@mui/icons-material/Delete';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Link } from 'react-router-dom';

import Modal from '../../../components/Modal/Modal';

import NearByModal from './NearByModal/NearByModal';

const NearByHospital = () => {

   const [modal, setModal] = useState(false)

    const [data, setData] = useState([]);

    const [clickedItem, setClickedItem] = useState(null)


    const onOFModal = () => {

        if (modal) {

            setClickedItem(null)
        }

        setModal(prev => !prev)
    }



  return (

       <div className='admin-facility'>

    <div className='go-back'><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back To Dashboard</Link></div>
    

    <div className='admin-facility-header'>

       <div>Near By Hospital</div>

       <div className='add-facility-btn' onClick={onOFModal}>Add</div>

    </div>

    <div className='admin-facility-rows'>

    <div className='admin-facility-row'>


   <div className='admin-facility-left'>

   <div className='admin-facility-title'>Name</div>

   <div>Address: Delhi</div>

   <div>+91 226542452</div>

   <div style={{marginTop: "10px"}}>Added By: Shruti</div>

   </div>

    
    <div className='admin-facility-btns'>

      <div><EditIcon/></div>

      <div><DeleteIcon /></div>

    </div>


    </div>

    </div>

    {modal && <Modal headers="Add Facility" handleClose={onOFModal} children={<NearByModal clickedItem={clickedItem} />} />}

    </div>

  )
}




export default NearByHospital