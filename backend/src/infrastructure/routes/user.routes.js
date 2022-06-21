import { Router } from 'express'
import { userRegisterController } from '../controllers/user.controller.js'


const router = Router();

router.post('/register', userRegisterController);

export const userRoutes = router;