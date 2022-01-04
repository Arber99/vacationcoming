import express from 'express';
import { getCOI, getCOIspecific, getCLIcountry } from '../controllers/coi.js';

const router = express.Router()

router.get('/', getCOI)
router.get('/country/:country', getCLIcountry)
router.get('/:coiVal', getCOIspecific)
//router.post('/', postCOI)

export default router