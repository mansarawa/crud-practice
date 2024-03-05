import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password,setPassword]=useState('')
  const router=useNavigate();
 const handlesubmit=async(e)=>{
  e.preventDefault();
  const res=await fetch('https://crud-practice-4.onrender.com/signup',{
    method:'post',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      name:name,
      email:email,
      password:password
    })
   
  })
  const result=await res.json()
  if(result.success)
  {
    toast.success('Register Successfully')
    router('/login')
  }
  console.log(setEmail)
 }
  return (
    <div className='container my-3'>
      <form onSubmit={handlesubmit}> 
      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      User Name
    </label>
    <input
      type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      className="form-control"
      id="exampleInputEmail1"
      required
      aria-describedby="emailHelp"
    />
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      required
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      className="form-control"
      required
      id="exampleInputPassword1"
    />
  </div>
  
  <button type="submit" className="btn btn-primary" >
    Submit
  </button>
</form>

    </div>
  )
}
