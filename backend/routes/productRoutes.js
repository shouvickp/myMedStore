import express from 'express'
import { getAlternateProducts, getProductById, getProducts } from '../controllers/productController.js'

const router=express.Router()

router.route('/').get(getProducts);

router.route('/:id').get(getProductById);

router.route('/alternate/:id').get(getAlternateProducts);

export default router