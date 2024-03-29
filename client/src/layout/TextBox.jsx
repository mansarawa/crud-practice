import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export default function TextBox(props) {
  console.log(props)
    const [desc, setDesc] = useState('')
    const [heading, setHeading] = useState('')
    const router=useNavigate();
    const user = JSON.parse(localStorage.getItem('user'))
    const userid=user._id;
    console.log(userid)
    const [text,setText]=useState('')
    const handlesubmit=async(e)=>{

      const res=await fetch('https://crud-practice-4.onrender.com/addnote',{
        method:'post',
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({
          userid:userid,
          heading:heading,
          desc:desc
        })
      })
      const result=await res.json();
      if(result.success)
      {
        console.log(result.success)
        toast.success('Added successfully')
        
          e.preventDefault();
          router('/mynotes')               
      }
    }

  return (
    <div  style={{backgroundColor:props.mode=='light'?'white':'#212529',color:props.mode=='light'?'white':"#212529",width:"100%",height:'90vh'}}>
      <form onSubmit={handlesubmit}  className='container '>
      {/* <div class="alert alert-success" role="alert">
          {text}
         </div>
       */}
        <h1 style={{color:props.mode=='dark'?'white':"#212529",width:"100%"}}>{props.title}</h1>
        
        <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Title/Categories
    </label>
    <input
      type="text"
      className="form-control"
      value={heading}
      required
      onChange={(e)=>setHeading(e.target.value)}
      id="exampleFormControlInput1"
      placeholder="college,offfice,market"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color:props.mode=='dark'?'white':"#212529",width:"100%"}}>
      Description
    </label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={8}
      value={desc}
      onChange={(e)=>setDesc(e.target.value)}
      
    />
  </div>
  
  <button className="btn btn-primary" onClick={()=>{toast.success('Added successfully')}}  type='submit'>Add Text</button>
  </form>
      </div>
  )
}
