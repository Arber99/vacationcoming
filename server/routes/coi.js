import express from 'express';
import { getCOI, getCOIspecific } from '../controllers/coi.js';

const router = express.Router()

router.get('/', getCOI)
router.get('/:coiVal', getCOIspecific)
//router.post('/', postCOI)

export default router