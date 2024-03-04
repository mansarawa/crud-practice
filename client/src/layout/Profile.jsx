import React, { useEffect, useState } from 'react'
import proFile from './profile.module.css'
import { toast } from 'react-toastify';
import ClickAwayListener from 'react-click-away-listener';
import { useNavigate } from 'react-router-dom';
export default function Profile(props) {
  const [photomodal, setPhotomodal] = useState(false)
  const [photo, setPhoto] = useState('')
  const user = JSON.parse(localStorage.getItem('user'))
  const userid = user._id;
  const navigate=useNavigate()
  const [image, setImage] = useState()
  const handleupload = async () => {
    const data = new FormData();
    data.append('file', image)
    data.append("upload_preset", "mansanotebook")
    data.append("cloud_name", "do8hfvnjb")
    const cloudSend = await fetch('https://api.cloudinary.com/v1_1/do8hfvnjb/image/upload', {
      method: 'post',
      body: data

    })
    const resu = await cloudSend.json();
    console.log(resu)
    const imageUrl = resu.url;
    console.log(imageUrl)

    const req = await fetch('http://localhost:4000/profile', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: imageUrl,
        userid: userid
      })
    })
    const result = await req.json();
    if (result.success) {
      console.log('uploaded')
      navigate('/profile')
      toast.success("image uploaded")
    }
  }
  const getUserProfilePic = async () => {

    const profile = await fetch('http://localhost:4000/getprofile', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userid: userid
      })
    })
    console.log('hello')
    const output = await profile.json();

    console.log(output.data)
    if (output.success) {
      setPhoto(output.data.url)
      console.log(photo)
    }
  }
  useEffect(() => {
    getUserProfilePic();
  }, [])
  const handleedit = async () => {
    setPhotomodal(true)
  }
  const handleClickAway = () => {
    setPhotomodal(false)
  }
  return (
    <div className={proFile.container} style={{backgroundColor:props.mode=='light'?'white':'#212529',color:props.mode=='dark'?'white':"#212529"}}>
      <div className="py-3" style={{ overflow: "hidden" }}>
        <img src={photo} alt="" style={{ height: "150px", borderRadius: '70%', width: "150px", objectFit:"fill" }} />
        <button className={`btn btn-primary  ${proFile.edit}`} onClick={handleedit}>Edit Profile Photo</button>
      </div>
      {photomodal && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            <input type="file"  onChange={(e) => setImage(e.target.files[0])} />
            <button className ="btn btn-primary" onClick={handleupload}>Upload</button>
          </div>  
        </ClickAwayListener>)}
        <div className={proFile.userdetails} style={{borderColor:props.mode=='dark'?'white':"#212529"}}>
          <div className={proFile.item}>
            <h3 style={{width:'50%'}}>Name </h3>
            <h4 style={{width:'50%'}}>{user.name}</h4>
          </div>
          <div className={proFile.item}>
          <h3 style={{width:'50%'}}>Email </h3> <h4 style={{width:'50%'}}>{user.email}</h4>
          </div>
          <div className={proFile.item}>
          <h3 style={{width:'50%'}}>Password </h3> <h4 style={{width:'50%'}}>{user.password}</h4>
          </div>

        </div>
    </div>
  )
}