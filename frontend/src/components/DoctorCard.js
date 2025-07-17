import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5>{doctor.name}</h5>
          <p>{doctor.specialty} - {doctor.location}</p>
          <button className="btn btn-primary" onClick={() => navigate(`/doctor/${doctor._id}`)}>View Profile</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;