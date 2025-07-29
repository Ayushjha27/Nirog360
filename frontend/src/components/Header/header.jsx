import React, { useState, useEffect } from 'react'

import './Header.css'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

const Header = (props) => {

  const location = useLocation();

  const navigate = useNavigate();

  const [eventpopup, setEventpopup] = useState(false);

  const [helpline, setHelpline] = useState(false);

  const [events, setEvents] = useState([]);


  const handleOpenPopup = (popup) => {
    if (popup === "event") {

      setEventpopup(true);
    } else {

      setHelpline(true)
    }
  }


  const fetchEvents = async () => {

    await axios.get('http://localhost:4000/api/notification/get').then((response) => {

      // console.log(response)
      setEvents(response.data.notifications)
    }).catch(err => {

      console.log(err);

      toast.error(err?.response?.data?.error)
    })
  }
  useEffect(() => {

    if (eventpopup) {

      fetchEvents()
    }
  }, [eventpopup])

  const handleClosePopup = (popup) => {

    if (popup === "event") {

      setEventpopup(false);
    } else {

      setHelpline(false)
    }
  }

  const handleLogin = () => {

    navigate('/login');
  }


  const handleLogout = async () => {

    props.showLoader();

    await axios.post("http://localhost:4000/api/auth/logout", {}, { withCredentials: true }).then(response => {

      console.log(response)

      props.handleLogin(false)

      localStorage.clear();

      navigate('/');
    }).catch(err => {

      console.log(err);

      toast.error(err?.response?.data?.error)

    }).finally(() => {

      props.hideLoader();

    })
  }
  return (

    <div className='header'>

      <div className='header-college-details'>

        <div className='header-college-details-left'>

          <img className='header-college-details-left-logo' src='https://www.pngitem.com/pimgs/m/218-2184384_mnnit-allahabad-logo-hd-png-download.png' alt='' />

          <div>
            <div className='header-college-details-name'>MotiLal Nehru </div>

            <div className='header-college-details-name'>National Institute of Technology</div>

            <div className='header-college-details-place'>Allahabad,</div>

            <div className='header-college-details-place'>Prayagraj</div>

          </div>
        </div>

        <div className="website-name">
          Nirog<span className="highlight-360">360</span>
        </div>




        <div className='header-college-details-right'>

          <div className='header-college-social-media'>

            <a target='_blank' href='https://www.youtube.com/shorts/zp6wqdv6GT4'><img src='https://cdn-icons-png.flaticon.com/128/3670/3670147.png' className='header-social-media-image' /></a>

            <a target='_blank' href='https://www.facebook.com/MNNITALLD/'><img src='https://cdn-icons-png.flaticon.com/128/733/733547.png' className='header-social-media-image' /></a>

            <a target='_blank' href='https://x.com/MNNITALLD'><img src='https://cdn-icons-png.flaticon.com/128/5968/5968830.png' className='header-social-media-image' /></a>

            <a target='_blank' href='https://www.instagram.com/mnnitalld/?hl=en'><img src='https://th.bing.com/th/id/OIP.0wjhvLpjGf_-r-1lqG3QAQHaHw?rs=1&pid=ImgDetMain' className='header-social-media-image' /></a>

          </div>

          <input type='text' className='header-input-tags' />

        </div>
      </div>

      <div className='navbar'>
        <Link to={'/'} className={`navbar-links ${location.pathname === "/" ? "active-link" : null}`}>
          Home
        </Link>

        <div onClick={props.isLogin ? handleLogout : handleLogin} className={`navbar-links ${location.pathname === "/login" ? "active-link" : null}`}>
          {props.isLogin ? "Logout" : "Login"}
        </div>


        <Link to={'/stock'} className={`navbar-links ${location.pathname === "/stock" ? "active-link" : null}`}>
          Stock View
        </Link>

        <div className='navbar-links event-link' onMouseEnter={() => { handleOpenPopup("event") }} onMouseLeave={() => { handleClosePopup("event") }}>

          <div className='navbar-link-opt'>   New Events <ArrowDropDownIcon /></div>
          {

            eventpopup && <div className='navbar-dropdown-popup event-pop'>
              {events.map((item, index) => {
                return (
                  <div className='popup notification'>📅 {item.title}</div>

                );
              })

              }
            </div>
          }

        </div>


        <div className='navbar-links event-link' onMouseEnter={() => { handleOpenPopup("helpline") }} onMouseLeave={() => { handleClosePopup("helpline") }}>


          <div className='navbar-link-opt'>  Helpline <ArrowDropDownIcon /></div>
          {

            helpline && <div className='navbar-dropdown-popup helpline-pop'>
              <div className='popup notification'>. Disaster management: 1007</div>

            </div>
          }


        </div>

      </div>
      {
        location.pathname === "/" && <div className='header-banner'>

          <img className='header-banner-image' src={"https://sunrisemcemotihari.rf.gd/main-building.jpg"} alt="" />

        </div>
      }

      <ToastContainer />
    </div>
  )
}

export default Header