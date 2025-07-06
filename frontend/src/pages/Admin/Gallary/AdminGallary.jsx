import React, { useState } from 'react'

import './AdminGallary.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Link } from 'react-router-dom';

import AddModal from './AddModal/AddModal';

import DeleteModal from './DeleteModal/DeleteModal';

const AdminGallary = () => {

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


    return (

        <div className='gallary-admin'>
            <div className='go-back'><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back To Dashboard</Link></div>


            <div className='add-pic-gallary-btn' onClick={setAddModalFunc}>Add</div>


            <div className='gallary-home'>
                <div className='gallary-home-image-block img-admin' onClick={setDeleteModalFunc}>
                    <img src='https://timess3spore.s3.amazonaws.com/ndata/media/Counsellor/CollegeImage/40dd437a8a4c86a5e6e37a1e7bfc4012desgin%20center.webp' className='gallary-home-image' />
                </div>


            </div>

            {addModal && <AddModal onClose={setAddModalFunc} />}


            {deleteModal && <DeleteModal onClose={setDeleteModalFunc} />}


        </div>
    )
}



export default AdminGallary