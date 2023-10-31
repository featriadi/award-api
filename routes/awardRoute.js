import { Router } from 'express'
import { verifyToken } from '../middlewares/verifyToken.js'
import {
    readAwards,
} from '../controllers/awardController.js'

const router = Router()

router.get('/awards', verifyToken, readAwards)

export default router
