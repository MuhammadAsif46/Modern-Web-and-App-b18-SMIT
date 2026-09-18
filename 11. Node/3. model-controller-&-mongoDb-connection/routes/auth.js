import express from 'express';
import createUser from '../controller/auth/createUser.js';

const router = express.Router();

router.get('/register', createUser);
router.get('/register', createUser);
router.get('/register', createUser);

export default router;