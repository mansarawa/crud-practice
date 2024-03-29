import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function () {

    const [heading, setHeading] = useState()
    const [desc, setDesc] = useState()
    const param = useParams();
    console.log(param.id)
    console.log(param.heading)
    console.log(param.desc)
    const note = localStorage.getItem('notes')
    console.log(note)
    const router = useNavigate();
    


        const handlesubmit = async (e) => {
            try {
            const res = await fetch('https://crud-practice-4.onrender.com/update', {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _id: param.id,
                    heading: heading,
                    desc: desc
                })
            })
            const result = await res.json();
            if (result.success) {
                // e.preventDefault();
                toast.success('Updated successfully')
                router('/mynotes')
            }
            else {
                console.log('not updated')
            }
        } catch (error) {
            console.log(error)
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
                        onChange={(e) => setHeading(e.target.value)}
                        id="exampleFormControlInput1"
                        defaultValue={param.heading}
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
                        defaultValue={param.desc}
                        onChange={(e) => setDesc(e.target.value)}
                        rows={8}

                    />
                </div>
                <button className="btn btn-primary" type='submit'>Update Text</button>
            </form>
        </div >
    )
}
