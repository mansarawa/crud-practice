import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'; // Corrected import

export default function MyNotes(props) {
  const user = JSON.parse(localStorage.getItem('user'));
  const userid = user._id;
 
  const [data, setData] = useState([]);
  const router = useNavigate(); // Corrected useNavigate

  const showNotes = async () => {
    try {
      const res = await fetch('http://localhost:4000/mynotes', {
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
    const res = await fetch("http://localhost:4000/delete", {
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
    <div   style={{backgroundColor:props.mode=='light'?'white':'#212529',marginTop:'3%',color:props.mode=='dark'?'white':"#212529"}}>
      <table className="table table-success table-striped" style={{textAlign:'center',width:'90%',marginLeft:'5%'}}>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody >
          {data && data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.heading}</td>
              <td>{item.desc}</td>
              <td style={{ display: 'flex' ,justifyContent:'space-evenly'}}>
                <button type="button" onClick={() => handleUpdate(item._id,item.heading,item.desc)} className="btn btn-success">Update</button>
                <button type="button" onClick={() => handledel(item._id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
