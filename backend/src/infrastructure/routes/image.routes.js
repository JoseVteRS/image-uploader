import { Router } from 'express';
import container from '../../container.js';

const router = Router();

const imageUploadController = container.resolve('imageUploadController');

router.post(
    '/image-upload',
    imageUploadController.execute.bind(imageUploadController)
);


export const imageRoutes = router;