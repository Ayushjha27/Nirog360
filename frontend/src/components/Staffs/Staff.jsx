import React, { useState } from 'react'
import './Staff.css'
import TableComp from '../Table/TableComp'
const Staff = () => {
   const staffHeader = ["Name", "Designation", "Email Id", "Contact No."]
  //  const [rowData, setRowData] = useState([])
  const rowData = [
    {
      name:"Shruti",
      designation:"HR",
      email:"shruti@gmail.com",
      contact:"5454252423"
    }
  ]
  return (
    <div className='staff'>
    <TableComp header= {staffHeader} data={rowData}/>
    </div>
  )
}

export default Staff