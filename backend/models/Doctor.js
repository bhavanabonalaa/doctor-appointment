import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  location: String,
  qualifications: String,
  experience: String,
  reviews: [String],
});

export default mongoose.model('Doctor', doctorSchema);