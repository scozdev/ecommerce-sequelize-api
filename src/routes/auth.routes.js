import { Router } from 'express'
import { createUser, loginUser, meUser } from '../controllers/auth'
import { isAuth } from '../middlewares/auth'

const router = Router()

router.post('/register', createUser)
router.post('/login', loginUser)
router.post('/me', isAuth, meUser)

export default router
