import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


export default function () {
    const [heading, setHeading] = useState()
    const [desc, setDesc] = useState()
    const param=useParams();
    console.log(param.id)
    const note=localStorage.getItem('note')
    const router=useNavigate();
    const data=localStorage.getItem('myNotes')
    console.log(data)
    const _id=data._id;
    console.log(_id)
    const handlesubmit=async()=>{
        const res=await fetch('http://localhost:4000/update',{
            method:'put',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                _id:param.id,
                heading:heading,
                desc:desc
            })
        })
        const result=await res.json();
        if(result.success)
        {
            router('/mynotes')
        }
        else{
            console.log('not updated')
        }
    }
    return (
        <div className='container'>
            <form onSubmit={handlesubmit}>
            <div className="mb-3">
                
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Email address
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
                    Example textarea
                </label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)}
                    rows={8}
                    defaultValue={""}
                />
            </div>
            <button className="btn btn-primary" type='submit'>Update Text</button>
        </form>
    </div >
  )
}
