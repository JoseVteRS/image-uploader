import awilix from 'awilix';
import { UserRegisterUseCase } from './application/use-cases/user-registration.usecase.js';
import { UserRegisterController } from './infrastructure/controllers/user-register.controller.js';
import { UserRepository } from './infrastructure/repositories/user.repositories.js';

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
});

// Use cases
container.register({
    userRegisterUseCase: awilix.asClass(UserRegisterUseCase).singleton()
});

// Controllers
container.register({
    userRegisterController: awilix.asClass(UserRegisterController).singleton(),
});

// Repositories
container.register({
    userRepository: awilix.asClass(UserRepository).singleton(),
});

export default container;