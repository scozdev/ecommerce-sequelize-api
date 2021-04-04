import { Router } from 'express'

const router = Router()

import userRoute from './user.routes';

router.use('/', userRoute)

export default router