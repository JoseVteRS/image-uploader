import { UserModel } from "../../domain/model/user-model"
import { UserRepository } from "../../infrastructure/repositories/user.repositories";
import { UserEmailAlreadyInUseException } from '../errors/user-email-already-in-use.exception.js';
import { UserIdAlreadyInUseException } from '../errors/user-id-already-in-use.exception.js';


export const userRegisterUseCase = async (id, name, email, password) => {
    const newUser = await UserModel.create(id, name, email, password);

    // Comprobamos si existe id duplicado
    const existingUserId = await UserRepository.findById(id);
    if (existingUserId) {
        throw new UserIdAlreadyInUseException();
    }
    // Comprobamos si existe email duplicado
    const existingUserByEmail = await UserRepository.findByEmail(email);
    if (existingUserByEmail) {
        throw new UserEmailAlreadyInUseException();
    }

    // Persistimos el nuevo usuario
    await UserRepository.create(newUser)
}