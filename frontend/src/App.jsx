import './App.css'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/home'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Stock from './pages/Stock/Stock'
function App() {

  return (
    <div className='App'>
      <Header/>
      <Routes>
        < Route path='/' element={<Home/>}/ >
         < Route path='/login' element={<Login/>}/ >
         < Route path='/stock' element={<Stock/>}/ >

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
