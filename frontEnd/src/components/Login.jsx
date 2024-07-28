import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/login', values)
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/')
                } else {
                    alert(res.data.Error);
                }
            })
            .then(err => console.log(err));
    };

    return (
        <div className="container mt-5 p-4 border bg-body-tertiary">
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 text-start">
                    <label htmlFor="email" className="form-label">Email </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={e => setValues({ ...values, email: e.target.value })}
                    />
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={e => setValues({ ...values, password: e.target.value })}
                    />
                </div>
                <div className="d-flex flex-column gap-2">
                    <button type="submit" className="btn btn-primary m-2">Login</button>
                    <Link to="/register" type="submit" className="btn btn-secondary m-2">Register</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
