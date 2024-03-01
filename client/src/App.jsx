
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './layout/Navbar.jsx'
import TextBox from './layout/TextBox.jsx';
import Register from './layout/Register.jsx';
import About from './layout/About.jsx';

import Login from './layout/Login.jsx';
import MyNotes from './layout/MyNotes.jsx';
import Update from './layout/Update.jsx';
const App = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <>
     
      
      <BrowserRouter>
      <Navbar title="BackChodi"/>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/mynotes' element={<MyNotes/>}/>
          <Route path='/update/:id/:heading/:desc' element={<Update/>}/>
          {user?<Route path='/' element={<TextBox title="Enter Text To Analyze"/>}/>:<Route  element={<Login/>}/>}
        </Routes>
        
      </BrowserRouter>
      
     
    </>
  )
}

export default App