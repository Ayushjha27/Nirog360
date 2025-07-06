import React,{useState,useEffect}from 'react'
import './Home.css'
import HomeIcon from '@mui/icons-material/Home'
import GroupIcon from '@mui/icons-material/Group';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ImageIcon from '@mui/icons-material/Image';
import AboutUs from '../../components/AboutUs/AboutUs';
import Staff from '../../components/Staffs/Staff';
import Facility from '../../components/Facilities/Facility';
import NearByHospital from './../../components/NearByHospitals/NearByHospital';
import Gallary from '../../components/Gallary/Gallary';
const Home = (props) => {
  const [page, setPage] = useState("About")
    let [rightSideHeader, setRightSideHeader] = useState("About Us");

     const handleChangeTab = (pagename) => {
        setPage(pagename);
        switch (pagename) {
            case "About":
                setRightSideHeader("About Us");
                break;
            case "Staff":
                setRightSideHeader("Our Staffs");
                break;
            case "Facilities":
                setRightSideHeader("Facilities");
                break;
            case "NearByHospitals":
                setRightSideHeader("Near By Hosptals");
                break;
            case "Gallary":
                setRightSideHeader("Gallary");
                break;
        }
    }

     const getComponent = () => {
        switch (page) {
            case "About":
                return <AboutUs />;
               
            case "Staff":
                return <Staff showLoader={props.showLoader} hideLoader={props.hideLoader}/>;
                
             case "Facilities":
                return <Facility showLoader={props.showLoader} hideLoader={props.hideLoader}/>;
               
            case "NearByHospitals":
                return <NearByHospital showLoader={props.showLoader} hideLoader={props.hideLoader}/>;
            
            case "Gallary":
                return <Gallary showLoader={props.showLoader} hideLoader={props.hideLoader}/>

            default:
                return null;
        }
    }

  return (
    <div className='home'>
      <div className='home-block'>
       <div className='home-left-page'>
        <div className={`home-left-option ${page==="About"? "active-opt" :null}`} onClick={()=>{handleChangeTab("About")}}>
         <HomeIcon/> About Us
        </div>
        <div className={`home-left-option ${page==="Staff"? "active-opt" :null}`}onClick={()=>{handleChangeTab("Staff")}}>
         <GroupIcon/> Staff
        </div>
        <div className={`home-left-option ${page==="Facilities"? "active-opt" :null}`} onClick={()=>{handleChangeTab("Facilities")}}>
         <Diversity3Icon/> Facilities
        </div>
         <div className={`home-left-option ${page==="NearByHospitals"? "active-opt" :null}`} onClick={()=>{handleChangeTab("NearByHospitals")}}>
         <LocalHospitalIcon/> Near By Hospitals
        </div>
        <div className={`home-left-option ${page==="Gallary"? "active-opt" :null}`} onClick={()=>{handleChangeTab("Gallary")}}>
         <ImageIcon/> Gallary
        </div>
       </div>
       <div className='home-right-page'>
         <div className='home-right-header'>
           {rightSideHeader}
         </div>
         <div className='home-right-section'>
          {getComponent()}
         </div>
       </div>
      </div>
    </div>
  )
}

export default Home