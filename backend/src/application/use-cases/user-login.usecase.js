

export class UserLoginUseCase {
    constructor({userRepository}){
        this.userRepository = userRepository;
    }

    async execute(email, password) {
        // Comprobar si existe el usuario por email
        const existingUser = await this.userRepository.findByEmail(email);
        if(!existingUser) {
          
        }
    }
}