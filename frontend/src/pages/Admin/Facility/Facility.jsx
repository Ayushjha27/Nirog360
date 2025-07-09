import React, { useEffect, useState } from 'react'
import './Facility.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import Modal from '../../../components/Modal/Modal';
import FacilityModal from './FacilityModal/FacilityModal';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
const Facility = (props) => {

  const [modal, setModal] = useState(false)
  const [data, setData] = useState([]);
  const [clickedItem, setClickedItem] = useState(null)

  const onOFModal = () => {
    if (modal) {
      setClickedItem(null)
    }
    setModal(prev => !prev)
  }

  const fetchData = async () => {
    props.showLoader();
    await axios.get('http://localhost:4000/api/facility/get').then((res) => {
      // console.log(res);
      setData(res.data.facility)
    }).catch(err => {
       console.log(err);
    }).finally(() => {
      props.hideLoader();
    })
  }

  useEffect(() => {
    fetchData()
  }, [])
 

  const handleEdit = (item)=>{
       setClickedItem(item)
        setModal(true)
  }

   const filterOutData = (id)=>{
        let newArr = data.filter((item)=>item._id!==id);
        setData(newArr);
    }
   const handleDelete = async(id)=>{
    props.showLoader();
     await axios.delete(`http://localhost:4000/api/facility/delete/${id}`,{withCredentials:true}).then((res)=>{
      filterOutData(id);
      // window.location.reload();
     }).catch(err => {
           // console.log(err);
           toast.error(err?.response?.data?.error);
         }).finally(() => {
      props.hideLoader();
    })
   }

  return (
    <div className='admin-facility'>
      <div className='go-back'><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back To Dashboard</Link></div>

      <div className='admin-facility-header'>
        <div>Facilities</div>
        <div className='add-facility-btn' onClick={onOFModal}>Add</div>
      </div>

      <div className='admin-facility-rows'>
        {
          data.map((item) => {
            return (
              <div className='admin-facility-row'>


                <div className='admin-facility-left'>
                  <div className='admin-facility-title'>{item.title}</div>
                  <div>{item.description} </div>
                  <div style={{ marginTop: "10px" }}>Added By: {item?.addedBy?.name}</div>
                </div>

                <div className='admin-facility-btns'>
                  <div onClick={()=>handleEdit(item)}><EditIcon /></div>
                  <div onClick={()=>handleDelete(item._id)}><DeleteIcon /></div>
                </div>

              </div>

            );
          })
        }
      </div>
      {modal && <Modal headers="Add Facility" handleClose={onOFModal} children={<FacilityModal   clickedItem={clickedItem} />} />}
      <ToastContainer />
    </div>
  )
}

export default Facility