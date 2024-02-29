import React, { useState, useEffect } from 'react';

export default function MyNotes() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userid = user._id;
  const [data, setData] = useState([]);

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
      console.log(result)
      const myNotes = result.notes;
      if (result.success) {
        setData(myNotes);
      } else {
        console.log('No notes found');
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    showNotes();
  }, []); // Corrected the function name here

  return (
    <div className='container my-3'>
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Desc</th>
          
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => (
            <tr key={index}>
              <td>{item.heading}</td>
              <td>{item.desc}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
