import React, { useEffect, useState } from 'react'

import './AdminGallary.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Link } from 'react-router-dom';

import AddModal from './AddModal/AddModal';


import DeleteModal from './DeleteModal/DeleteModal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const AdminGallary = (props) => {

    const [addModal, setAddModal] = useState(false);

    const [deleteModal, setDeleteModal] = useState(false)

    const [data, setData] = useState([])

    const [clickedItem, setClickedItem] = useState(null)

    const setAddModalFunc = () => {

        setAddModal(prev => !prev)

    }


    const setDeleteModalFunc = (item = null) => {
        if (deleteModal) {

            setClickedItem(null)
        } else {

            setClickedItem(item)
        }

        setDeleteModal(prev => !prev)
    }
    const fetchData = async () => {
        props.showLoader();
        await axios.get("http://localhost:4000/api/gallary/get").then((resp) => {
            console.log(resp)
            setData(resp.data.images)
        }).catch(err => {
            console.log(err);
            toast.error(err?.response?.data?.error);
        }).finally(() => {
            props.hideLoader();
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (

        <div className='gallary-admin'>
            <div className='go-back'><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back To Dashboard</Link></div>


            <div className='add-pic-gallary-btn' onClick={setAddModalFunc}>Add</div>


            {
                data.map((item) => {
                    return (
                        <div className='gallary-home' key={item._id}>
                            <div className='gallary-home-image-block img-admin' onClick={()=>{setDeleteModalFunc(item)}}>
                                <img src={item.link} className='gallary-home-image' />
                            </div>

                        </div>
                            );
                })
            }


            { addModal && <AddModal clickedItem={clickedItem} onClose={setAddModalFunc} /> }


                    { deleteModal && <DeleteModal clickedItem={clickedItem} onClose={setDeleteModalFunc} /> }
                    <ToastContainer />

        </div>
    )
}



export default AdminGallary