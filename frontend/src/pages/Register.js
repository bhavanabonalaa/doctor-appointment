import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../index.css';
const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await axios.post('http://localhost:5000/api/users/register', form);
    localStorage.setItem('userInfo', JSON.stringify(data));
    navigate('/');
  };

  return (

  
    <div className="container1">
      <h2 id="register">Register</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="name" placeholder="Name"  onChange={handleChange} required />
        <input className="form-control mb-2" name="email" placeholder="Email"  autoComplete='off'onChange={handleChange} required />
        <input className="form-control mb-2" name="password" type="password" autoComplete='new-password' placeholder="Password" onChange={handleChange} required />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;