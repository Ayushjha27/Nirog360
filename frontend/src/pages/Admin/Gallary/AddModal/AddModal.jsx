import React from 'react'
import './AddModal.css'
const AddModal = (props) => {
  return (
    <div className='addModal'>
      <div className='addModal-card'>
        <div>Add Image</div>
        <div className='modal-add-btns'>
        <div className='cancel-modal-btn' onClick={()=>props.onClose()}>Cancel</div>
        <label htmlFor='fileInput' className='cancel-modal-btn'>Upload</label>
        <input id="fileInput" accept='image/*' className='cancel-file' type='file'/>
        </div>
      </div>
    </div>
  )
}

export default AddModal