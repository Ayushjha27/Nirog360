import React, { useEffect, useState } from 'react'

import './NearByModal.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const NearByModal = (props) => {

  const [inputField, setInputField] = useState({ name: "", address: "", contact: "" });

  useEffect(() => {
    if (props.clickedItem) {
      setInputField({ ...inputField, name: props.clickedItem.name, address: props.clickedItem.address, contact: props.clickedItem.contact })
    }
  }, [])


  const updateFunc = async () => {
    await axios.put(`http://localhost:4000/api/hospital/update/${props.clickedItem._id}`, inputField, { withCredentials: true }).then((resp) => {
      window.location.reload();
    }).catch(err => {
      console.log(err);
      toast.error(err?.response?.data?.error);
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (inputField.name.trim().length === 0 || inputField.address.trim().length === 0 || inputField.contact.trim().length === 0)
      return toast.error("Enter all the fields");

    if (props.clickedItem) {
      updateFunc();
      return;
    }
    await axios.post("http://localhost:4000/api/hospital/add", inputField, { withCredentials: true }).then((res) => {
      window.location.reload();
    }).catch(err => {
      console.log(err);

    })
  }




  const handleOnChange = (event, key) => {

    setInputField({ ...inputField, [key]: event.target.value })
  }


  return (

    <form className='register-form' onSubmit={handleSubmit}>

      <div className='register-form-div'>

        <div className='register-input-box'>

          <input value={inputField.name} onChange={(event) => handleOnChange(event, "name")}
            className='input-box-register' placeholder='Name' type="text" />
        </div>

        <div className='register-input-box'>

          <input value={inputField.address} onChange={(event) => handleOnChange(event, "address")} className='input-box-register' placeholder='Address' type="text" />
        </div>

        <div className='register-input-box'>

          <input value={inputField.contact} onChange={(event) => handleOnChange(event, "contact")} className='input-box-register' placeholder='Contact' type="text" />

        </div>

      </div>

      <button type="submit" className='form-btn reg-btn'>{props.clickedItem ? "Update" : "Add"}</button>
      <ToastContainer />
    </form>

  )
}



export default NearByModal