import { Router } from 'express';
import { getProducts, getProductDetails } from '../controllers/productController.js';

const router = Router();

router.get('/:categoryname/products', getProducts);

router.get('/:categoryname/products/:productid', getProductDetails);

export default router;
