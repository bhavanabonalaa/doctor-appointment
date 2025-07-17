import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorCard from '../components/DoctorCard';
import '../index.css';

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const [filters, setFilters] = useState({ name: '', specialty: '', location: '' });

  const fetchDoctors = async () => {
    const { data } = await axios.get('http://localhost:5000/api/doctors', { params: filters });
    setDoctors(data);
  };
   useEffect(() => {
  const getData = async () => {
    await fetchDoctors();
  };
  getData();
}, [filters]);
  

  const handleChange = e => setFilters({ ...filters, [e.target.name]: e.target.value });

  return (
    <div>
    <div className="container mt-2">
      <h2>Search Doctors</h2>
      <div className="row mb-3">
        <input className="form-control mb-2" name="name" placeholder="Name" onChange={handleChange} />
        <input className="form-control mb-2" name="specialty" placeholder="Specialty" onChange={handleChange} />
        <input className="form-control mb-2" name="location" placeholder="Location" onChange={handleChange} />
      </div>
      </div>
      <div className="row1">
        {doctors.map(doc => <DoctorCard key={doc._id} doctor={doc} />)}
      </div>
    </div>
  );
};

export default Home;