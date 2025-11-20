import React from 'react'
import Login from './auth/students/Login'
import Register from './auth/students/Register'
import { Route, Routes, } from 'react-router-dom'
import Notapage from './auth/students/Notapage'
import OtpFind from './auth/students/OtpFind'
import Nav from './Home/Nav/Nav'
import Home from './Home/Home'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/verify-OTP' element={<OtpFind/>}/>
       <Route path='/Login' element={<Login/>} />
       <Route path='*' element={<Notapage/>}/>
       {/* //test section// */}
       <Route path='/nav' element={<Nav/>}/>
      </Routes>
    </div>
  )
}

export default App