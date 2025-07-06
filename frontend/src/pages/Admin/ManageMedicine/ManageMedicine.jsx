import React, { useEffect, useState } from 'react'

import './ManageMedicine.css'

import EditIcon from '@mui/icons-material/Edit';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import DeleteIcon from '@mui/icons-material/Delete';

import { Link } from 'react-router-dom'

import SearchBox from '../../../components/SearchBox/SearchBox';

import Modal from './../../../components/Modal/Modal';

import MedicineModal from './MedicineModal/MedicineModal';

import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify';

const ManageMedicine = (props) => {

  const [medicineSearch, setMedicineSearch] = useState("")
  const [addModal, setAddModal] = useState(false);
  const [clickedMedicine, setClickedMedicine] = useState(null)


  const [data, setData] = useState([])

  const onOffmodal = () => {

    if (addModal) {
      setClickedMedicine(null)
    }
    setAddModal(prev => !prev)
  }

  const onChangeValue = (value) => {

    setMedicineSearch(value)
  }

   const fetchData = async()=>{
     props.showLoader();
     await axios.get(`http://localhost:4000/api/medicine/search-by-name?name=${medicineSearch}`).then((response)=>{
      // console.log(response)
      setData(response.data.medicines)
     }).catch(err => {
            console.log(err);
        }).finally(() => {
            props.hideLoader();
        })
   }
   useEffect(()=>{
     fetchData();
   },[medicineSearch]);

   const handleEdit = (item)=>{
     setClickedMedicine(item)
     setAddModal(true)
   }
   
  const filterOutMedicine = (id)=>{
     let newArr = data.filter((item)=>item._id !== id);
     setData(newArr)
  }

   const handleDelete = async(id)=>{
    props.showLoader();
    await axios.delete(`http://localhost:4000/api/medicine/delete/${id}`,{withCredentials:true}).then((res)=>{
      filterOutMedicine(id)
    }).catch(err => {
          console.log(err);
          toast.error(err?.response?.data?.error);
        }).finally(() => {
          props.hideLoader();
        })
   }
  return (

    <div className='manageMedicine'>

      <div className='go-back'><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back To Dashboard</Link> </div>

      <div className='top-manage-medicine'>
        <SearchBox placeholder="Search Medicine " value={medicineSearch} onChange={onChangeValue} />
        <div className='add-manage-medicine' onClick={onOffmodal} >Add</div>
      </div>


      <div className='manageMedicine-card'>

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

            {
              data.map((item,index)=>{
                return(
                <div className='report-form-row'>

              <div className=''>{index+1}</div>

              <div className='col-2-mng'>{item.name}</div>
              <div className='col-2-mng'>{item?.addedBy?.name} </div>
              <div className='col-3-mng'>{item.quantity}</div>
              <div onClick={()=>handleEdit(item)} className='edit-icon'><EditIcon /></div>
              <div onClick={()=>handleDelete(item._id)} className='delete-icon'><DeleteIcon /></div>

            </div>
                );
              })
            }

            {
              (data.length===0) &&
              <div className='report-form-row'>

              <div className=''>No Any Mediicine Yet!</div>

               </div>
            }

          </div>

        </div>
      </div>


      {
        addModal && <Modal header="Add Medicine" handleClose={onOffmodal}  children={<MedicineModal clickedMedicine={clickedMedicine} showLoader={props.showLoader} hideLoader={props.hideLoader}/>} />

      }
      <ToastContainer/>
    </div>

  )
}



export default ManageMedicine