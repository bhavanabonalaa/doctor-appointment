// models/Appointment.js
import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Doctor',
  },
  patientName: { type: String, required: true },
  contact: { type: String, required: true },
  timeSlot: { type: String, required: true },
  date: { type: String, required: true },
});

export default mongoose.model('Appointment', appointmentSchema);