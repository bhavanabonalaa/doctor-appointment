import express from 'express';
import { getDoctors, getDoctorById } from '../controllers/doctorController.js';

const router = express.Router();

router.get('/', getDoctors);
router.get('/:id', getDoctorById);

export default router;