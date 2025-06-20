import React from 'react'
import './StudentModal.css'
const StudentModal = () => {
  return (
<div className='record-modal'>

    

    <div className='student-details-scroll'>
       <div className='student-modal-detail'>
        <div className='student-modal-header'>
          14-03-2025
        </div>

        <div className='student-modal-body-student'>
         <div className='student-modal-body-header'>
           <div>Medicine Name</div>
           <div>Quantity</div>
         </div>

         <div className='student-modal-body-item'>
            <div className='student-item-modal'>
              <div>Paracetalmol</div>
              <div>20</div>
            </div>

         </div>
        </div>
       </div>
    </div>
    </div>  )
}

export default StudentModal