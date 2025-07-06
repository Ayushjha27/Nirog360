import React, { useState } from 'react'

import './ManageEvent.css'

import DeleteIcon from '@mui/icons-material/Delete';


const ManageEvent = () => {

     const [title, setTitle] = useState("");

    const [data, setData] = useState([])

    return (

        <div className='add-staffs-box'>

            <form className='register-form'>

                <div className=''>

                    <div className='register-input-box'>

                        <input  value={title} onChange={(event)=>setTitle(event.target.value)} className='input-box-register mngEventInp' type='text' placeholder='Staff Name' />

                    </div>
             
             <div className='list-staffs'>

          <div className='list-staff'>

           <div>MahaShivratri</div>

           <div className='list-staff-btns'>

           <div style={{cursor:"pointer"}}><DeleteIcon/></div>

           </div>

          </div>

         </div>



                </div>

                <button type="submit" className='form-btn reg-btn'>Add</button>

            </form>

        </div>
        
    )
}



export default ManageEvent