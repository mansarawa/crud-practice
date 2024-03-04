
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './layout/Navbar.jsx'
import TextBox from './layout/TextBox.jsx';
import Register from './layout/Register.jsx';
import About from './layout/About.jsx';

import Login from './layout/Login.jsx';
import MyNotes from './layout/MyNotes.jsx';
import Update from './layout/Update.jsx';
import Profile from './layout/Profile.jsx';

const App = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const [mode,setMode]=useState('light')
  const handlemode=()=>{
    if(mode=='light')
    {
      setMode('dark')
     
    }
    else
    {
      setMode('light')
      
    }
  }
  return (
    <>
 
      <BrowserRouter style={{width:'100%',hegiht:'100%'}}>
      <Navbar title="Notepad" mode={mode} handlemode={handlemode}/>
        <Routes>
          <Route path='/register'  element={<Register mode={mode}/>}/>
          <Route path='/about' element={<About mode={mode}/>}/>
          <Route path='/login' element={<Login mode={mode}/>}/>
          <Route path='/profile' element={<Profile mode={mode}/>}/>
          <Route path='/mynotes' element={<MyNotes mode={mode}/>}/>
          <Route path='/update/:id/:heading/:desc' element={<Update mode={mode}/>}/>
          {user?<Route path='/' element={<TextBox title="Enter Text To Add" mode={mode}/>}/>:<Route  element={<Login mode={mode}/>}/>}
        </Routes>
        
      </BrowserRouter>
      
    </>
  )
}

export default App
