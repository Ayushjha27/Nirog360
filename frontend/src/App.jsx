import './App.css'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/home'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Stock from './pages/Stock/Stock'
import AdminDashboard from './pages/Admin/Dashboard/AdminDashboard'
import RegisterStudent from './pages/Admin/RegisterStudent/RegisterStudent'
function App() {

  return (
    <div className='App'>
      <Header/>
      <Routes>
        < Route path='/' element={<Home/>}/ >
         < Route path='/login' element={<Login/>}/ >
         < Route path='/stock' element={<Stock/>}/ >
         < Route path='/admin/dashboard' element={<AdminDashboard/>}/ >
         < Route path='/admin/register-student' element={<RegisterStudent/>}/ >

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
