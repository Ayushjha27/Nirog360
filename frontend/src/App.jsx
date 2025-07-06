import './App.css'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/home'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Stock from './pages/Stock/Stock'
import AdminDashboard from './pages/Admin/Dashboard/AdminDashboard'
import RegisterStudent from './pages/Admin/RegisterStudent/RegisterStudent'
import ManageMedicine from './pages/Admin/ManageMedicine/ManageMedicine'
import Record from './pages/Admin/Records/Record'
import Facility from './pages/Admin/Facility/Facility'
import NearByHospital from './pages/Admin/NearByHospital/NearByHospital'
import AdminGallary from './pages/Admin/Gallary/AdminGallary'
import StudentDashboard from './pages/Students/StudentDashboard'
import GlobalLoader from './components/GlobalLoader/GlobalLoader'
import { useState } from 'react'
function App() {
  const [loader,setLoader] = useState(false);
  const [isLogin,setIsLogin] = useState(localStorage.getItem("isLogin"));
  
  const handleLogin=(value)=>{
    setIsLogin(value)
  }
  const showLoader = ()=>{
    setLoader(true);
  }
  const hideLoader = () =>{
    setLoader(false);
  }
  return (
    <div className='App'>
      <Header isLogin={isLogin} handleLogin={handleLogin} showLoader={showLoader} hideLoader={hideLoader}/>
      <Routes>
        < Route path='/' element={<Home showLoader={showLoader} hideLoader={hideLoader}/>}/ >
         < Route path='/login' element={<Login handleLogin={handleLogin} showLoader={showLoader} hideLoader={hideLoader}/>}/ >
         < Route path='/stock' element={<Stock showLoader={showLoader} hideLoader={hideLoader}/>}/ >
         < Route path='/admin/dashboard' element={<AdminDashboard showLoader={showLoader} hideLoader={hideLoader}/>}/ >
         < Route path='/admin/register-student' element={<RegisterStudent showLoader={showLoader} hideLoader={hideLoader}/>}/ >
         < Route path='/admin/manage-medicine' element={<ManageMedicine showLoader={showLoader} hideLoader={hideLoader}/>}/ >
         < Route path='/admin/record' element={<Record showLoader={showLoader} hideLoader={hideLoader}/>}/ >
         < Route path='/admin/facility' element={<Facility showLoader={showLoader} hideLoader={hideLoader}/>}/ >
         < Route path='/admin/nearByHospital' element={<NearByHospital showLoader={showLoader} hideLoader={hideLoader}/>}/ >
         < Route path='/admin/gallary' element={<AdminGallary showLoader={showLoader} hideLoader={hideLoader}/>}/ >

         < Route path='/student/:id' element={<StudentDashboard/>}/ >

      </Routes>
      <Footer/>
     { loader && <GlobalLoader /> } 
    </div>
  )
}

export default App
