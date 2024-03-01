import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'; // Corrected import

export default function MyNotes() {
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
        localStorage.setItem("myNotes", JSON.stringify(result.notes))
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

  const handleUpdate = (_id) => {
    router(`/update/${_id}`); // Navigate to Update component with item ID
  }

  return (
    <div className='container my-3'>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.heading}</td>
              <td>{item.desc}</td>
              <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button type="button" onClick={() => handleUpdate(item._id)} className="btn btn-success">Update</button>
                <button type="button" onClick={() => handledel(item._id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
