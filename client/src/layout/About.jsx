import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notecontext.jsx'
export default function About() {
  const a=useContext(noteContext)
  useEffect(() => {
    
  a.update();
   
  }, [])
  
  return (
    <div>About {a.state.name}</div>
  )
}
