import React,{useEffect, useState} from 'react'
import { toast } from 'react-toastify';

export default  function Profile() {
  const [photo, setPhoto] = useState('')
  const user=JSON.parse(localStorage.getItem('user'))
  const userid=user._id;
  const [image, setImage] = useState()
  const handleupload=async()=>{
    const data=new FormData();
    data.append('file',image)
    data.append("upload_preset","mansanotebook")
    data.append("cloud_name","do8hfvnjb")
    const cloudSend=await fetch('https://api.cloudinary.com/v1_1/do8hfvnjb/image/upload',{
      method:'post',
      body:data
      
    })
    const resu=await cloudSend.json();
    const imageUrl=resu.url;      
      console.log(imageUrl)
   
    const req=await fetch('http://localhost:4000/profile',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        url:imageUrl,
        userid:userid
      })
    })
    const result=req.json();
    if(result.success)
    {
      toast.success("image uploaded")
    }
 
 
    
  }
  const getUserProfilePic = async() =>{

    const profile=await fetch('http://localhost:4000/getprofile',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        userid:userid
      })
    })
    console.log('hello')
    const output=await profile.json();
    
    console.log(output.data.url)
    if(output.success)
    {
      setPhoto(output.data.url)
      console.log(photo)
    }
  }
  useEffect(() => {
    getUserProfilePic();
  }, [])
  return (
    <div className='container'>
       <div className="image" style={{height:"200px", width:"200px",overflow:"hidden"}}>
        <img src={photo} alt="" style={{height:"200px", width:"200px",objectFit:"contain"}}/>
      </div> 
      <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
      <button onClick={handleupload}>Upload</button>
    </div>
  )
}