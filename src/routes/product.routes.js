import { Router } from 'express'
import { addProducts, getProducts, deleteProducts, updateProducts, getProductDetailById } from '../controllers/product'
import { isAuth } from '../middlewares/auth'

const router = Router()

router.get('/', isAuth, getProducts)
router.get('/:id', isAuth, getProductDetailById)
router.post('/', isAuth, addProducts)
router.put('/', isAuth, updateProducts)
router.delete('/', isAuth, deleteProducts)

export default router
