import React, { useEffect, useState } from 'react'

import './NearByHospital.css'

import TableComp from './../Table/TableComp';

import axios from 'axios'

const NearByHospital = (props) => {

  const hospitalheaders = ["Sno.","Name","Address","Contact"];


  const [rowData,setRowData] = useState([])

   const getFormattedData = (data)=>{

    let newarr = data.map((item,ind)=>{

      return {

        srNo:ind+1,

        name:item.name,

        address:item.address,

        contact:item.contact

      }
    })
     setRowData(newarr);

  }


   const fetchData = async()=>{

     props.showLoader();

    await axios.get("http://localhost:4000/api/hospital/get").then((response)=>{
      // console.log(response);
      getFormattedData(response.data.hospitals)

    }).catch(err=>{
      console.log(err);

    }).finally(()=>{
      props.hideLoader();

    })
   }

  useEffect(()=>{

    fetchData()
  },[])


  return (
    <div>

      <TableComp header={hospitalheaders} data={rowData}/>

    </div>
  )
}





export default NearByHospital