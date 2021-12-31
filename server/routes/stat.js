import express from 'express';
import { getSTAT } from '../controllers/stat.js';

const router = express.Router()

router.get('/', getSTAT)
//router.post('/', postCOI)

export default router