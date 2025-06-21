import React, { useState } from 'react'
import './AddModal.css'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const AddModal = (props) => {
   const [image, setImage] = useState(null)
  const [loader, setLoader] = useState(false)

   const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
     data.append('upload_preset', "DMS_MNNIT1");
     setLoader(true)

     try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/dnsdpkq4i/image/upload", data);
      const imageUrl = response.data.url;
      console.log(imageUrl)
      setImage(imageUrl)

    } catch (err) {
      console.log(err)
    }finally{
      setLoader(false)
    } 

   }
  return (
    <div className='addModal'>
      <div className='addModal-card'>
        <div>Add Image</div>
        <div className='modal-add-btns'>
        <div className='cancel-modal-btn' onClick={()=>props.onClose()}>Cancel</div>
        <label htmlFor='fileInput' className='cancel-modal-btn'>Upload</label>
        <input id="fileInput" accept='image/*' onChange={(e)=>{uploadImage(e)}} className='cancel-file' type='file'/>
        </div>
        {
          loader &&  <Box sx={{ display: 'flex' }}>
             <CircularProgress />
             </Box>
        }
        {
          image && <img src={image} style={{width:"100px",height:"100px",marginTop:20}}/>
        }
        {
          image && <div className='cancel-modal-btn'>Submit</div>
        }
      
      </div>
    </div>
  )
}

export default AddModal

// Dispensary_MNNIT

//API KEY 224616948174897
//@dnsdpkq4i