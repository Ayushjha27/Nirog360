import React, { useState } from 'react'

import './Report.css'

import DeleteIcon from '@mui/icons-material/Delete';

import SearchBox from '../../../../components/SearchBox/SearchBox'



const Report = () => {

  const [searchMedicineName, setSearchmedicineName] = useState("")

  const [dropdown, setDropDown] = useState(false);

  const [data, setData] = useState([])

  const [selectedMedicine, setSelectedMedicine] = useState([]);

  const onChange = (value) => {

    setSearchmedicineName(value)

  }


  return (

    <div className='report-regieter'>

      <div className='medicine-suggestion-block'>

        <SearchBox value={searchMedicineName} onChange={onChange} placeholder='Search Medicine' />

        {

          dropdown && <div className='report-dropdown'>
            <div className='report-medicine-drpdown'>Paracetamol</div>

          </div>
        }


      </div>


      <div className='report-form-rows'>

        <div className='report-form-header'>

          <div className='col-1-rm'>Medicine Name</div>
          <div className='col-2-rm'>Quantity Left</div>
          <div className='col-3-rm'>Required Quantity</div>
          <div className='col-4-rm'>Delete</div>

        </div>

        <div className='report-form-row-block'>

          <div className='report-form-row'>

            <div className='col-1-rm'>Name</div>
            <div className='col-2-rm'>10</div>
            <div className='col-3-rm'><input type='number' className='input-table' /></div>
            <div className='delete-icon col-4-rm'> <DeleteIcon /></div>

          </div>


          <div className='report-form-row'>

            <div>No Any Data Yet!</div>

          </div>
        </div>

      </div>

      <div className='modal-submit'>Submit</div>

    </div>
  )
}




export default Report