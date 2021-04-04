import { Router } from 'express'

const router = Router()

import authRoutes from './auth.routes';
import productRoutes from './product.routes';
import orderRoutes from './order.routes';

router.use('/auth', authRoutes)
router.use('/products', productRoutes)
router.use('/orders', orderRoutes)

export default router