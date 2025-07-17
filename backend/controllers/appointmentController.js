import Appointment from '../models/Appointment.js';
import { protect } from '../middleware/authMiddleware.js';
export const createAppointment = async (req, res) => {
  const { doctorId, patientName, contact, timeSlot, date } = req.body;
  const existing = await Appointment.findOne({ doctorId, timeSlot, date });
  if (existing) return res.status(400).json({ message: 'Time slot already booked' });
  const appointment = new Appointment({ doctorId, patientName, contact, timeSlot, date });
  await appointment.save();

  // Simulate reminder
  console.log(`Reminder: Appointment booked for ${patientName} at ${timeSlot} on ${date}`);

  res.status(201).json({ message: 'Appointment booked successfully' });
};

export const getAppointmentsByContact = async (req, res) => {
  const { contact } = req.query;
  const appointments = await Appointment.find({ contact });
  res.json(appointments);
};