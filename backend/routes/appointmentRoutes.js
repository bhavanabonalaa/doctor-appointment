import express from 'express';
import { createAppointment, getAppointmentsByContact } from '../controllers/appointmentController.js';

const router = express.Router();

router.post('/', createAppointment);
router.get('/', getAppointmentsByContact);

export default router;