import express from 'express';
import { PRODUCTS } from '../utilis/contants.js';
const router = express.Router();

router.get('/products', (req, res) => {
    res.status(200).send({ status: 200, message: 'Products Fetched', products: PRODUCTS });
});

export default router;