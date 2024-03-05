import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'; // Corrected import
import myNote from './myNote.module.css'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export default function MyNotes(props) {
  const user = JSON.parse(localStorage.getItem('user'));
  const userid = user._id;
 
  const [data, setData] = useState([]);
  const router = useNavigate(); // Corrected useNavigate

  const showNotes = async () => {
    try {
      const res = await fetch('https://crud-practice-4.onrender.com/mynotes', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userid: userid
        })
      });
      const result = await res.json();

      const myNotes = result.notes;
      if (result.success) {
        setData(myNotes);
        localStorage.setItem("notes", JSON.stringify(result.notes))
      } else {
        console.log('No notes found');
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    showNotes();
  }, []);

  const handledel = async (_id) => {
    const res = await fetch("https://crud-practice-4.onrender.com/delete", {
      method: "delete",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        _id: _id
      })
    })
    const result = await res.json();
    if (result.success) {
      showNotes();
    }
  }

  const handleUpdate = (_id,heading,desc) => {
    router(`/update/${_id}/${heading}/${desc}`); // Navigate to Update component with item ID
  }

  return (
    <div  className={myNote.parent} >
      
          {data && data.map((item, index) => (
            <div className={props.mode ==='light'?myNote.child:myNote.modechile}>
              <div className={myNote.heading}>
                <h3>{item.heading}</h3>
                </div>
              <div className={myNote.desc}>
                <td>{item.desc}</td>
              </div>
              <div className="button" style={{ display: 'flex' ,justifyContent:'space-evenly'}}>
              
                <FaRegEdit onClick={() => handleUpdate(item._id,item.heading,item.desc)} />
                <MdDelete onClick={() => handledel(item._id)} style={{color:'red',cursor:'pointer'}} />
                </div>
              </div>
          ))}
        
    </div>
  );
}
