import React, { useState } from 'react'
import './ManageMedicine.css'
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import SearchBox from '../../../components/SearchBox/SearchBox';
import Modal from './../../../components/Modal/Modal';
import MedicineModal from './MedicineModal/MedicineModal';
const ManageMedicine = () => {
    const [medicineSearch, setMedicineSearch] = useState("")
    const [addModal, setAddModal] = useState(false);
    const [clickedMedicine,setClickedMedicine] = useState(null)

    const [data, setData] = useState([])
     const onOffmodal = () => {
        if(addModal){
            setClickedMedicine(null)
        }
        setAddModal(prev => !prev)
    }

    const onChangeValue = (value) => {
        setMedicineSearch(value)
    }
  return (
    <div className='manageMedicine'>
         <div className='go-back'><Link to={'/admin/dashboard'}><ArrowBackIcon/> Back To Dashboard</Link> </div>
         <div className='top-manage-medicine'>
          <SearchBox placeholder="Search Medicine " value={medicineSearch} onChange={onChangeValue} />
                <div className='add-manage-medicine' onClick={onOffmodal} >Add</div>
         </div>

         <div  className='manageMedicine-card'>
           <div className='report-form-rows'>
                <div className='report-form-header'>
                    <div className=''>Sr. No.</div>
                    <div className='col-1-mng'>Medicine Name</div>
                    <div className='col-2-mng'>Added By</div>
                    <div className='col-3-mng'>Quantity</div>
                     <div className=''>Edit</div>

                    <div className=''>Delete</div>
                </div>

        <div className='report-form-row-block'>
        <div className='report-form-row'>
             <div className=''>2</div>
             <div className='col-2-mng'>Paracetamol</div>
              <div className='col-2-mng'>Shruti</div>     
                            <div className='col-3-mng'>12</div>     
                            <div className='edit-icon'><EditIcon /></div>     
                            <div className='delete-icon'><DeleteIcon/></div>     

        </div>

         <div className='report-form-row'>
             <div className=''>No Any Mediicine Yet!</div>
            
        </div>
        
        </div>

        </div> 
         </div>
         {
          addModal &&          <Modal header="Add Medicine" handleClose={onOffmodal} children={<MedicineModal/>}/>

         }
    </div>
  )
}

export default ManageMedicine