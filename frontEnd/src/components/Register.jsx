import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/register', values)
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/login')
                } else {
                    alert("Error")
                }
            })
            .then(err => console.log(err));
    };

    return (
        <div className="container mt-5 p-4 border bg-body-tertiary">
            <h2 className="mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 text-start">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={e => setValues({ ...values, name: e.target.value })}
                    />
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={e => setValues({ ...values, email: e.target.value })} />
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={e => setValues({ ...values, password: e.target.value })} />
                </div>
                <div className="d-flex flex-column gap-3">
                    <button type="submit" className="btn btn-primary ">Register</button>
                    <Link to="/login" type="submit" className="btn btn-secondary
                ">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
