import React from 'react'

export default function About(props) {
   
  return (
    <div   style={{width:'100%',paddingLeft:'5%',minHeight:'90vh',maxHeight:'100%',backgroundColor:props.mode=='light'?'white':"#212529",color:props.mode=='light'?'#212529':"white"}}>
     <h2> About</h2>
     <h5>This Notes App Made By Madhusudan Singh Rathore </h5>
     <h6>In This Notes App User Can Add Note and Save.User Can also update and delte the note as per user requirement.
      User has user profile where user cand upload profile photo and edit after upload.
     </h6>
    </div>
  )
}
