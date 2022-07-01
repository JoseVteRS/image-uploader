import { InvalidLoginException } from "../errors/invalid-login.exception.js";
import bcrypt from 'bcryptjs';

export class UserLoginUseCase {
    constructor({userRepository}){
        this.userRepository = userRepository;
    }

    async execute(email, password) {
        // Comprobar si existe el usuario por email
        const existingUser = await this.userRepository.findByEmail(email);
        if(!existingUser) {
          throw new InvalidLoginException();
        }

        // Comprobar si la password coincide 
        const didpasswordMatch = await bcrypt.compare(password, existingUser.password);
        if(!didpasswordMatch) {
            throw new InvalidLoginException();
        }

        // Devolver el ID del usuario existente
        return existingUser.id;
    }
}