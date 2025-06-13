import React from 'react'
import './RecordModal.css'
const RecordModal = () => {
  return (
    <div className='record-modal'>

    <div className='student-modal-report'>
        <div>Shruti</div>
        <div>Shruti@gmail.com</div>
        <div>2023ca93</div>
    </div>

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
    </div>
  )
}

export default RecordModal