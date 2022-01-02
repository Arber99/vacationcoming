import express from 'express';
import { getPICTUREs } from '../controllers/pexel.js';

const router = express.Router()

router.get('/', getPICTUREs);

export default router 