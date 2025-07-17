import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Doctor from './models/Doctor.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const seedDoctors = async () => {
  await Doctor.deleteMany();

  const doctors = [
    {
      name: 'Dr. Sarah Lee',
      specialty: 'Cardiologist',
      location: 'New York',
      qualifications: 'MD, FACC',
      experience: '10 years',
      reviews: ['Excellent care', 'Very knowledgeable'],
    },
    {
      name: 'Dr. James Patel',
      specialty: 'Dermatologist',
      location: 'Los Angeles',
      qualifications: 'MD, FAAD',
      experience: '8 years',
      reviews: ['Helped with my skin issues', 'Professional and kind'],
    },
    {
      name: 'Dr. Anita Sharma',
      specialty: 'Pediatrician',
      location: 'Chicago',
      qualifications: 'MD',
      experience: '12 years',
      reviews: ['Great with kids', 'Very friendly and thorough'],
    },
    {
    name: "Dr. Meenakshi Reddy",
    specialty: "Gynecologist",
    location: "Chennai",
    qualifications: "MBBS, MS (Gynecology)",
    experience: "15 years",
    reviews: [
      "Very supportive throughout my pregnancy.",
      "Highly recommended for women's health."
    ]
  },
  {
    name: "Dr. Arjun Nair",
    specialty: "Orthopedic Surgeon",
    location: "Kochi",
    qualifications: "MBBS, MS (Orthopedics)",
    experience: "11 years",
    reviews: [
      "Treated my knee injury very well.",
      "Caring and highly skilled surgeon."
    ]
  },
  {
    name: "Dr. Aishwarya Iyer",
    specialty: "Pediatrician",
    location: "Mumbai",
    qualifications: "MBBS, DCH",
    experience: "8 years",
    reviews: [
      "Takes great care of children.",
      "Explains things clearly to parents."
    ]
  },
];


  await Doctor.insertMany(doctors);
  console.log('Doctors seeded');
  process.exit();
};

seedDoctors();