import { Router } from 'express';
import container from '../../container.js';

const router = Router();

const userRegisterController = container.resolve('userRegisterController')

router.post('/register', userRegisterController.execute.bind(userRegisterController));

export const userRoutes = router;