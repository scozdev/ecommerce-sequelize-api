import { Router } from 'express'
import { getMineOrders, getOrderById, createOrder } from '../controllers/order'
import { isAuth } from '../middlewares/auth'

const router = Router()

router.get('/mine', isAuth, getMineOrders)
router.get('/:id', isAuth, getOrderById)
router.post('/', isAuth, createOrder)

export default router
