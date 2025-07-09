import React, { useEffect, useState } from 'react'

import './Record.css';

import VisibilityIcon from '@mui/icons-material/Visibility';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Link } from 'react-router-dom';

import SearchBox from '../../../components/SearchBox/SearchBox';



import Modal from './../../../components/Modal/Modal';

import RecordModal from './RecordModal/RecordModal';


const Record = () => {

  const [studentRoll, setStudentRoll] = useState("");

  const [listOfYear, setListOfYear] = useState([]);

  const [listOfMonth, setListOfMonths] = useState([]);

  const currentYear = new Date().getFullYear();

  const [modal, setModal] = useState(false)

  const [allRecordModal, setAllRecordModal] = useState(false)

  const [data, setData] = useState([]);

  const [selectedHistory, setSelectedHistory] = useState(null)

  const [selectedAllDetails, setSelecetedAllDetaisl] = useState(null)


  const [selectedYear, setSelectedYear] = useState("")

  const [selectedMonth, setSelectedMonth] = useState("")

  const onOffModal = () => {

    setModal(prev => !prev)
  }



  const onChangeField = (value) => {

    setStudentRoll(value)
  }

  const fetchData = async () => {

  }


  useEffect(() => {

    if (selectedMonth === "" || selectedYear === "") {

      return;
    }

    fetchData();
  }, [selectedYear, selectedMonth])


  useEffect(() => {

    let arr = [];

    for (let i = 2025; i <= parseInt(currentYear); i++) {
      arr.unshift(i.toString())
    }


    setListOfYear(arr);
    setSelectedYear(arr[0]);


    const months = [

      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const currentMonthIndex = new Date().getMonth();

    const pastAndCurrentMonths = months.slice(0, currentMonthIndex + 1);
    setListOfMonths(pastAndCurrentMonths);
    setSelectedMonth(pastAndCurrentMonths[pastAndCurrentMonths.length - 1])

  }, [])


  const handleOnOpenModal = () => {

    setModal(prev => !prev)
  }


  return (

    <div className='records'>

      <div className='go-back'><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back To Dashboard</Link></div>

      <SearchBox value={studentRoll} onChange={onChangeField} placeholder="Search By Roll No." />

      <div className='record-date-block'>

        Select year
        <div className='record-date-year'>

          {
            listOfYear.map((item, index) => {
              return (

                <div onClick={() => setSelectedYear(item)} className={`record-year ${selectedYear === item ? 'active-stats' : null}`}>{item}</div>
              );

            })
          }

        </div>

        Select Month
        <div className='record-date-year'>
          {

            listOfMonth.map((item, index) => {

              return (

                <div onClick={() => setSelectedMonth(item)} className={`record-year ${selectedMonth === item ? 'active-stats' : null}`}>{item}</div>
              );

            })

          }
        </div>

      </div>


      <div className='manageMedicine-card'>

        {/* <div className='report-form-rows'>

          <div className='report-form-header'>

            <div className=''>View</div>

            <div className='col-1-mng'>Student Name</div>
            <div className='col-2-mng'>Roll No.</div>

            <div className='col-3-mng'>Date</div>

          </div>


          <div className='report-form-row-block'>
            <div className='report-form-row'>



              <div className='' onClick={() => { handleOnOpenModal() }}><VisibilityIcon sx={{ cursor: 'pointer' }} /></div>

              <div className=''><VisibilityIcon sx={{ cursor: 'pointer' }} /></div>

              <div className='col-2-mng'>Shruti</div>

              <div className='col-2-mng'>93</div>

              <div className='col-3-mng'>12-06-2025</div>


            </div>

            <div className='report-form-row'>


              <div className=''>No Any Records Yet!</div>

            </div>

          </div>

        </div> */}
         
         <div className='report-form-rows'>
  {/* Header Row */}
  <div className='report-form-header'>
    <div className='col-view'>View</div>
    <div className='col-1-mng'>Student Name</div>
    <div className='col-2-mng'>Roll No.</div>
    <div className='col-3-mng'>Date</div>
  </div>

  {/* Record Rows */}
  <div className='report-form-row-block'>
    {/* Example Record */}
    <div className='report-form-row'>
      <div className='col-view' onClick={handleOnOpenModal}>
        <VisibilityIcon sx={{ cursor: 'pointer' }} />
      </div>
      <div className='col-1-mng'>Shruti</div>
      <div className='col-2-mng'>93</div>
      <div className='col-3-mng'>12-06-2025</div>
    </div>

    {/* No Records Message */}
    <div className='report-form-row no-record'>
      <div className='no-record-msg'>No Any Records Yet!</div>
    </div>
  </div>
</div>

      </div>


      {
        modal && <Modal header="Records" handleClose={onOffModal} children={<RecordModal />} />

      }


    </div>
  )
}

export default Record