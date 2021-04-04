import { Router } from 'express'
import { addProducts, getProducts, deleteProducts, updateProducts } from '../controllers/product'
import { isAuth } from '../middlewares/auth'

const router = Router()

router.get('/', isAuth, getProducts)
router.post('/', addProducts)
router.put('/', updateProducts)
router.delete('/', deleteProducts)

export default router
