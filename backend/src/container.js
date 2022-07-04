import awilix, { AwilixError } from 'awilix';
import { UserLoginUseCase } from './application/use-cases/user-login.usecase.js';
import { UserRegisterUseCase } from './application/use-cases/user-register.usecase.js';
import { UserRepository } from './infrastructure/repositories/user.repositories.js';
import { UserRegisterController } from './infrastructure/controllers/user-register.controller.js';
import { UserLoginController } from './infrastructure/controllers/user-login.controller.js';
import { ImageUploadUseCase } from './application/use-cases/image-upload.usecase.js';
import { ImageUploadController } from './infrastructure/controllers/image-upload.controller.js';
import { ImageRepository } from './infrastructure/repositories/image.repository.js';

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
});

// Use cases
container.register({
    userLoginUseCase: awilix.asClass(UserLoginUseCase).singleton(),
    userRegisterUseCase: awilix.asClass(UserRegisterUseCase).singleton(),

    imageUploadUseCase: awilix.asClass(ImageUploadUseCase).singleton()
});

// Controllers
container.register({
    userLoginController: awilix.asClass(UserLoginController).singleton(),
    userRegisterController: awilix.asClass(UserRegisterController).singleton(),

    imageUploadController: awilix.asClass(ImageUploadController).singleton()
});

// Repositories
container.register({
    userRepository: awilix.asClass(UserRepository).singleton(),

    imageRepository: awilix.asClass(ImageRepository).singleton(),
});

export default container;