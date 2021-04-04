import { Router } from 'express'
import { createUser, loginUser, meUser } from '../controllers/auth'

const router = Router()

router.post('/register', createUser)
router.post('/login', loginUser)
router.post('/me', meUser)

export default router
