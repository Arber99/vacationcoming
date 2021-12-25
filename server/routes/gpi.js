import express from 'express';
import { getGPI } from '../controllers/gpi.js';

const router = express.Router()

router.get('/', getGPI)

export default router