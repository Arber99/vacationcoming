import express from 'express';
import { getGPI, getGPIspecific, getGPIcountry } from '../controllers/gpi.js';

const router = express.Router()

router.get('/', getGPI)
router.get('/country/:country', getGPIcountry)
router.get('/:gpiVal', getGPIspecific)

//! Wont be needed
//router.post('/', postGPI)

export default router