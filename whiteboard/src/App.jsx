import React from 'react'
import Login from './auth/students/Login'
import Register from './auth/students/Register'
import { Route, Routes, } from 'react-router-dom'
import Notapage from './auth/students/Notapage'
import OtpFind from './auth/students/OtpFind'


function App() {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Register/>}/>
       <Route path='/verify-OTP' element={<OtpFind/>}/>
       <Route path='/Login' element={<Login/>} />
       <Route path='*' element={<Notapage/>}/>
      </Routes>
    </div>
  )
}

export default App