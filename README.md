# 🏥 Virtual Appointment Booking System

## 📌 Project Overview

This is a *responsive web application* that allows patients to easily search for doctors, view their availability, and book appointments online. It aims to simplify the scheduling process and improve healthcare accessibility.

---
## 🎥 Demo Video

Watch the full walkthrough of the Virtual Appointment Booking System in action:

👉 [Watch the demo](https://drive.google.com/file/d/1GiZwPJbYWSwiitjNAaioAnCF_QslwcO_/view?usp=sharing)


## 🔧 Features

- *Doctor Search*: Search by name, specialty (e.g., cardiologist), or location.
- *Appointment Booking*: 
  - View available slots for each doctor.
  - Book appointments with patient name, contact info, and preferred time.
  - Confirmation message on successful booking.
- *My Appointments*:
  - View upcoming and past appointments.
  - Prevent double booking with simple validation.
- *Doctor Profiles*:
  - Show qualifications, experience, and mock user reviews.
- *Reminder Feature* (Mocked):
  - Simulates email/SMS reminders via alerts or console logs.
- *Responsive Design*:
  - Fully functional on mobile, tablet, and desktop.

---

## 🛠 Tech Stack

- *Frontend*: HTML, CSS, JavaScript  
- *Styling*: Bootstrap (for responsive UI)  
- *Data Storage*: Mongodb
- (Optional): Lightweight backend with Node.js or JSON Server

🔧 BACKEND DEVELOPMENT (Node.js + Express + MongoDB)

✅ 1. Initialize Backend Project

mkdir backend
cd backend
npm init -y


✅ 2. Install Required Packages

npm install express mongoose dotenv cors bcryptjs jsonwebtoken
npm install nodemon --save-dev


👉 Then start the server:
   npm run dev


  🌐 FRONTEND DEVELOPMENT (React + Bootstrap)
   
✅ 1. Initialize React App

npx create-react-app frontend
cd frontend

✅ 2. Install Required Packages

npm install axios react-router-dom bootstrap

👉 Then start the server:
   npm run dev

