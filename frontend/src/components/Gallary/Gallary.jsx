import React, { useEffect, useState } from 'react'
import './Gallary.css'
import axios from 'axios'
const Gallary = (props) => {
   
  const [data,setData] = useState([])
  const fetchData = async()=>{
    props.showLoader();
    await axios.get("http://localhost:4000/api/gallary/get").then((respnse)=>{
      console.log(respnse)
      setData(respnse.data.images)
    }).catch(err=>{
      console.log(err);
    }).finally(()=>{
      props.hideLoader();
    })
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='gallary-home'>
      {
        data.map((item,index)=>{
          return(
<div key={index}className='gallary-home-image-block'>
      <img src={item.link} className='gallary-home-image'/>
     </div>
          );
        })
      }
     
    </div>
  )
}

export default Gallary