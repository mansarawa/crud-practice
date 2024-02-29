import React, { useState } from 'react'

export default function TextBox(props) {
    const [desc, setDesc] = useState('')
    const [heading, setHeading] = useState('')
    const user = JSON.parse(localStorage.getItem('user'))
    const [text,setText]=useState('')
    const handlesubmit=async(e)=>{
      e.preventDefault();
      const res=await fetch('http://localhost:4000/addnote',{
        method:'post',
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({
          userid:user._id,
          heading:heading,
          desc:desc
        })
      })
      const result=await res.json();
      if(result.success)
      {
        setTimeout(() => {
          setText("Your Note has Been Addes")
        }, 3000);
        
      }
    }
  return (
    <div className='container my-3' >
      <form onSubmit={handlesubmit}>
      {/* <div class="alert alert-success" role="alert">
          {text}
         </div>
       */}
        <h1>{props.title}</h1>
        
        <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Title/Catogries
    </label>
    <input
      type="text"
      className="form-control"
      value={heading}
      onChange={(e)=>setHeading(e.target.value)}
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
      Description
    </label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={8}
      value={desc}
      onChange={(e)=>setDesc(e.target.value)}
      defaultValue={""}
    />
  </div>
  
  <button className="btn btn-primary" type='submit'>Add Text</button>
  </form>
    </div>
  )
}
