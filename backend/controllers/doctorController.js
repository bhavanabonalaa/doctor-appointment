import Doctor from '../models/Doctor.js';

export const getDoctors = async (req, res) => {
  const { name, specialty, location } = req.query;
  const query = {};

  if (name) query.name = new RegExp(name, 'i');
  if (specialty) query.specialty = new RegExp(specialty, 'i');
  if (location) query.location = new RegExp(location, 'i');

  const doctors = await Doctor.find(query);
  res.json(doctors);
};

export const getDoctorById = async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
  res.json(doctor);
};