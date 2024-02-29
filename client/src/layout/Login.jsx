import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const router = useNavigate()
    const handlesubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:4000/login', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        const result = await res.json();
        if (result.success) {
            localStorage.setItem("user",JSON.stringify(result))
            router('/')
            console.log("login success")
        }
    }
    return (
        <div className='container my-3'>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="exampleInputPassword1"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}
