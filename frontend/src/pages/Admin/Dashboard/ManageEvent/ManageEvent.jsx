import React, { useEffect, useState } from 'react'

import './ManageEvent.css'

import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
const ManageEvent = (props) => {

    const [title, setTitle] = useState("");

    const [data, setData] = useState([]);
    
    const handleSubmitEvent = async(e)=>{
       e.preventDefault();
       if (title.trim().length === 0)
         return toast.error("Please Enter Title");
        props.showLoader();
        await axios.post('http://localhost:4000/api/notification/add',{title},{withCredentials:true}).then((response)=>{
            setData([response.data.notification,...data]);
            // toast.success(response.data.notification.message);
        }).catch(err => {
            console.log(err);
           toast.error(err?.response?.data?.error);
        }).finally(() => {
            props.hideLoader();
        })

    }

    const fetchData = async () => {
        props.showLoader();
        axios.get('http://localhost:4000/api/notification/get').then((response) => {
            //  console.log(response);
            setData(response.data.notifications);
            setTitle("");
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            props.hideLoader();
        })
    }
    useEffect(() => {
        fetchData();
    }, []);
    
     const filterOutEvent = (id) => {
        let newArr = data.filter((item) => item._id !== id);
        setData(newArr)
    }

    const handleDeleteEvent = async(id)=>{
        props.showLoader();
        axios.delete(`http://localhost:4000/api/notification/delete/${id}`,{withCredentials:true}).then((response)=>{
        //   console.log(response)
          filterOutEvent(id);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            props.hideLoader();
        })
    }

    return (

        <div className='add-staffs-box'>

            <form onSubmit={handleSubmitEvent} className='register-form'>

                <div className=''>

                    <div className='register-input-box'>

                        <input value={title} onChange={(event) => setTitle(event.target.value)} className='input-box-register mngEventInp' type='text' placeholder='Add Event' />

                    </div>

                    <div className='list-staffs'>

                        {
                            data.map((item, index) => {
                                return (
                                    <div className='list-staff'>

                                        <div>{item.title.slice(0,60)}</div>

                                        <div className='list-staff-btns'>

                                            <div onClick={()=>handleDeleteEvent(item._id)} style={{ cursor: "pointer" }}><DeleteIcon /></div>

                                        </div>

                                    </div>
                                );
                            })
                        }

                    </div>



            <ToastContainer />
                </div>

                <button type="submit" className='form-btn reg-btn'>Add</button>

            </form>
        </div>

    )
}



export default ManageEvent