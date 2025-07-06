import React, { useEffect, useState } from 'react'

import './Stock.css'

import SearchBox from '../../components/SearchBox/SearchBox'

import TableComp from '../../components/Table/TableComp';

import axios from 'axios'

const Stock = (props) => {

  const [medicineName, setMedicineName] = useState("");

  const [stocks, setStocks] = useState([]);

  const handleInputChange = (value) => {

    setMedicineName(value)

  }

  const getFormattedData = (data) => {

    let newarr = data.map((item, ind) => {

      return {

        srNo: ind + 1,

        name: item.name,

        quantity: item.quantity,

        usage: item.usage
      }
    })

    setStocks(newarr)

  }


  const headers = ["SNo.", "Name", "Quantity", "Usage"];

  const fetchData = async () => {

    props.showLoader();
    await axios.get(`http://localhost:4000/api/medicine/search-by-name?name=${medicineName}`).then((response) => {

      // console.log(response)

      if (response.data.medicines.length === 0) {

        setStocks([]);

      }
      getFormattedData(response.data.medicines)

      // props.hideGlobalError();
    }).catch(err => {

      console.log(err);

    }).finally(() => {

      props.hideLoader();

    })
  }
  useEffect(() => {

    fetchData()

  }, [medicineName])



  return (

    <div className='stock-page'>

      <SearchBox placeholder="Search Medicine" value={medicineName} onChange={handleInputChange} />

      <div className='stock-page-card'>

        <TableComp header={headers} data={stocks} />
      </div>

    </div>
  )
}



export default Stock