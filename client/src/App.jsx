
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './layout/Navbar.jsx'
import TextBox from './layout/TextBox.jsx';
import Register from './layout/Register.jsx';
import About from './layout/About.jsx';

import Login from './layout/Login.jsx';
import MyNotes from './layout/MyNotes.jsx';
const App = () => {
  return (
    <>
     
      
      <BrowserRouter>
      <Navbar title="BackChodi"/>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/mynotes' element={<MyNotes/>}/>
          <Route path='/' element={<TextBox title="Enter Text To Analyze"/>}/>
        </Routes>
        
      </BrowserRouter>
      
     
    </>
  )
}

export default App