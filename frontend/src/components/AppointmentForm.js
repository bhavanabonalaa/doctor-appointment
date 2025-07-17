import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = ({ doctorId }) => {
  const [form, setForm] = useState({ patientName: '', contact: '', timeSlot: '', date: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
      const handleSubmit = async e => {
  e.preventDefault();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (!userInfo) return setMessage('You must be logged in to book');

  try {
    await axios.post('http://localhost:5000/api/appointments',
      { ...form, doctorId },
      { headers: { Authorization: `Bearer ${userInfo.token} `} }
    );
    setMessage('Appointment booked successfully!');
  } catch (err) {
    setMessage(err.response?.data?.message || 'Booking failed');
  }
};
  

  return (
    <form onSubmit={handleSubmit}>
      <h4>Book Appointment</h4>
      <input name="patientName" className="form-control mb-2" placeholder="Your Name" onChange={handleChange} required />
      <input name="contact" className="form-control mb-2" placeholder="Contact Info" onChange={handleChange} required />
      <input name="date" type="date" className="form-control mb-2" onChange={handleChange} required />
      <input name="timeSlot" className="form-control mb-2" placeholder="Time Slot (e.g., 10:00 AM)" onChange={handleChange} required />
      <button className="btn btn-success">Book</button>
      {message && <p className="mt-2">{message}</p>}
    </form>
  );
};

export default AppointmentForm;