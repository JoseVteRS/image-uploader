import { Router } from 'express';
import container from '../../container.js';

const router = Router();

const userRegisterController = container.resolve('userRegisterController');
const userLoginController = container.resolve('userLoginController');

router.post('/login', userLoginController.execute.bind(userLoginController));
router.post(
    '/register',
    userRegisterController.execute.bind(userRegisterController)
);

export const userRoutes = router;
