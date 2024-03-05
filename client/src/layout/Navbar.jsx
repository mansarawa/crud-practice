import React, { useState, useSyncExternalStore } from 'react'
import Register from './Register.jsx'

import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function Navbar(props) {
  const router = useNavigate();
  
  const user = JSON.parse(localStorage.getItem('user'))
  //  console.log(user.name)
  const hadlelogout = () => {

    localStorage.clear();
    toast.error('Logout')
    router('/login')
  }
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              {user ? <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/mynotes"}>
                  My Notes
                </Link>
              </li> : ""}
              {!user ? <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/register'}>
                  Register
                </Link>
              </li> : ''}
              {!user ? <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/login"}>
                  Login
                </Link>
              </li> : <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login" onClick={hadlelogout}>
                  Logout
                </Link>
              </li>}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>

              </li>


            </ul>
            <form className="d-flex" role="search">
              <Link className="nav-link active" style={{color:props.mode=='dark'?'white':"#212529",marginRight:'50px'}}  aria-current="page" to={"/profile"}>{user ? `Hello ${user.name}` : 'Hello Guest'} </Link>
              <div className="nav-link active">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    onClick={props.handlemode}
                    defaultChecked=""
                  />
                  <label className="form-check-label" style={{color:props.mode=='dark'?'white':"#212529",width:"100%"}} htmlFor="flexSwitchCheckChecked">
                    Enable Dark Mode
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
