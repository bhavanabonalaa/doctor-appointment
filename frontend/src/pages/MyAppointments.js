import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';
const MyAppointments = () => {
  const [contact, setContact] = useState('');
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const { data } = await axios.get('http://localhost:5000/api/appointments', { params: { contact } });
    setAppointments(data);
  };

  return (
    <div className="container3">
      <h2 id="doctor">My Appointments</h2>
      <input className="form-control mb-2" placeholder="Enter your contact" onChange={e => setContact(e.target.value)} />
      <button className="btn btn-primary" onClick={fetchAppointments}>Fetch</button>
      <ul className="mt-3">
        {appointments.map(app => (
          <li key={app._id}>{app.date} at {app.timeSlot} - {app.patientName}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyAppointments;