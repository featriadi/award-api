import { Router } from 'express';
import { 
    login,
    refreshToken
} from "../controllers/userController.js";

const router = Router()

router.post('/auth/login', login)
router.post('/auth/refresh-token', refreshToken)

export default router
