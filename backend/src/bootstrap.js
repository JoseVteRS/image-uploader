import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { config as dotenvConfig } from 'dotenv';
import mongoose from 'mongoose';
import { errorMiddleware } from './infrastructure/middlewares/error.middleware.js';
import { userRoutes } from './infrastructure/routes/user.routes.js';
import { imageRoutes } from './infrastructure/routes/image.routes.js';

dotenvConfig();

const limiter = rateLimit({
    windowMs: 0.5 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export const bootstrap = async () => {
    const app = express();
    app.disable('x-powered-by');
    
    app.use(express.json());
    app.use(cors());

    if (process.env.NODE_ENV === 'production') app.use(limiter);

    app.use(userRoutes);
    app.use(imageRoutes);

    app.use(errorMiddleware);

    await mongoose.connect(process.env.MONGODB_URI, {
        connectTimeoutMS: 4000,
    });

    app.listen(process.env.PORT, () =>
        console.log(`Servidor levantado en el puerto ${process.env.PORT}`)
    );
};
