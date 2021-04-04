import { Router } from 'express'
import { addProducts, getProducts, deleteProducts, updateProducts } from '../controllers/product'
import { isAuth } from '../middlewares/auth'

const router = Router()

router.get('/', isAuth, getProducts)
router.post('/', isAuth, addProducts)
router.put('/', isAuth, updateProducts)
router.delete('/', isAuth, deleteProducts)

export default router
