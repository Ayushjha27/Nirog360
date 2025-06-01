import React, { useState } from 'react'
import './Stock.css'
import SearchBox from '../../components/SearchBox/SearchBox'
import TableComp from '../../components/Table/TableComp';
const Stock = () => {
  const [medicineName, setMedicineName] = useState("");

     const handleInputChange = (value) => {
        setMedicineName(value)
    }

    const headers = ["SNo.", "Name", "Quantity", "Usage"];

    const rowData = [
      {
        SNo:1,
        Name:"Paracetamol",
        Quantity:20,
        Usage:"Fever"
      }
    ]
  return (
    <div className='stock-page'>
        <SearchBox placeholder="Search Medicine" value={medicineName} onChange={handleInputChange}/>
        <div className='stock-page-card'>
           <TableComp header={headers} data={rowData}/>
        </div>
    </div>
  )
}

export default Stock