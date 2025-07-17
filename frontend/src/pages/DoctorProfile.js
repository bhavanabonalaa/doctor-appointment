import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppointmentForm from '../components/AppointmentForm';
const DoctorProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/doctors/${id}`).then(res => setDoctor(res.data));
  }, [id]);

  if (!doctor) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>{doctor.name}</h2>
      <p><strong>Specialty:</strong> {doctor.specialty}</p>
      <p><strong>Location:</strong> {doctor.location}</p>
      <p><strong>Experience:</strong> {doctor.experience}</p>
      <p><strong>Qualifications:</strong> {doctor.qualifications}</p>
      <h4>Reviews</h4>
      <ul>{doctor.reviews.map((rev, idx) => <li key={idx}>{rev}</li>)}</ul>
      <AppointmentForm doctorId={id} />
    </div>
  );
};

export default DoctorProfile;