import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import DoctorProfile from './pages/DoctorProfile';
import MyAppointments from './pages/MyAppointments';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
const App = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    window.location.reload();
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">MediBook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/my-appointments">My Appointments</Link></li>

            </ul>

            <ul className="navbar-nav ms-auto">
              {!userInfo ? (
                <>
                  <li className="nav-item" ><Link className="nav-link" to="/login">Login</Link></li>
                  <li className="nav-item" ><Link className="nav-link" to="/register">Register</Link></li>
                </>
              ) : (
                <>
                  <li className="nav-item" ><span className="nav-link">Hi, {userInfo.name}</span></li>
                  <li className="nav-item" >
                    <button className="btn btn-link nav-link" onClick={logoutHandler}>Logout</button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;

