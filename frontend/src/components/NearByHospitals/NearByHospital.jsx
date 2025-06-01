import React from 'react'
import './NearByHospital.css'
import TableComp from './../Table/TableComp';
const NearByHospital = () => {
  const hospitalheaders = ["Sno.","Name","Address","Contact"];

  const rowData = [
    {
      Sno:"1",
      Name:"Shruti",
      Address:"Civil Line",
      Contact:"545712543"
    }
  ]
  return (
    <div>
      <TableComp header={hospitalheaders} data={rowData}/>
    </div>
  )
}

export default NearByHospital