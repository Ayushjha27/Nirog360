import './App.css'

import { Route,Routes,Navigate } from 'react-router-dom'

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

    let role = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).role : null;
  let id = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo"))._id : null;
  
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

         < Route path='/login' element={ isLogin? role==="student"?<Navigate to={`/student/${id}`}/>:<Navigate to={'/admin/dashboard'}/> :<Login handleLogin={handleLogin} showLoader={showLoader} hideLoader={hideLoader}/>}/ >


         < Route path='/stock' element={<Stock showLoader={showLoader} hideLoader={hideLoader}/>}/ >

         < Route path='/admin/dashboard' element={ isLogin ? (role==="admin" || role==="staff")?<AdminDashboard showLoader={showLoader} hideLoader={hideLoader}/> :<Navigate to="/" />: <Navigate to="/login" />}/ >

         < Route path='/admin/register-student' element={isLogin ? (role==="admin" || role==="staff")?<RegisterStudent showLoader={showLoader} hideLoader={hideLoader}/> :<Navigate to="/" />: <Navigate to="/login" />}/ >

         < Route path='/admin/manage-medicine' element={isLogin ?(role==="admin" || role==="staff")? <ManageMedicine showLoader={showLoader} hideLoader={hideLoader}/> :<Navigate to="/" />: <Navigate to="/login" />}/ >

         < Route path='/admin/record' element={isLogin ?(role==="admin" || role==="staff")?  <Record showLoader={showLoader} hideLoader={hideLoader}/> :<Navigate to="/" />: <Navigate to="/login" />}/ >

         < Route path='/admin/facility' element={isLogin ?(role==="admin" || role==="staff")?  <Facility showLoader={showLoader} hideLoader={hideLoader}/>:<Navigate to="/" />: <Navigate to="/login" />}/ >

         < Route path='/admin/nearByHospital' element={isLogin ?(role==="admin" || role==="staff")?  <NearByHospital showLoader={showLoader} hideLoader={hideLoader}/> :<Navigate to="/" />: <Navigate to="/login" />}/ >

         < Route path='/admin/gallary' element={isLogin ?(role==="admin" || role==="staff")? <AdminGallary showLoader={showLoader} hideLoader={hideLoader}/> :<Navigate to="/" />: <Navigate to="/login" />}/ >


         < Route path='/student/:id' element={isLogin && role === "student" ?<StudentDashboard  showLoader={showLoader} hideLoader={hideLoader} />: <Navigate to="/" />}/ >


      </Routes>
      
      <Footer/>
      
     { loader && <GlobalLoader /> } 
     
    </div>
  )
}




export default App
