import { Router } from 'express'

const router = Router()

import authRoutes from './auth.routes';
import productRoutes from './product.routes';

router.use('/auth', authRoutes)
router.use('/products', productRoutes)

export default router