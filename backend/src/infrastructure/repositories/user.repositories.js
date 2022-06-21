import { UserModel } from "../../domain/model/user-model.js";
import { UserSchema } from "../schemas/user.schema.js";




/**
 * User MongoDB repository implementation
 */
export class UserRepository {

    /**
     * Transforms a database user into a domain user
     * @param {*} persistanceUser Database user
     * @returns Domain user
     */
    static toDomain(persistanceUser) {
        const { _id, email, name, password, profilePicture, images } = persistanceUser;

        return new UserModel(_id, name, email, password, profilePicture, images);
    }


    /**
     * Transforms a domain user into a database user
     * @param {UserModel} domainUser Domain user
     * @returns Database user
     */
    static toPersistance(domainUser) {
        const { id, name, email, password, profilePicture, images } = domainUser;

        return { _id: id, email, name, password, profilePicture, images };
    }

    /**
     * Finds a user by id
     * @param {String} id User id
     * @return Domain user
     */
    static async findById(id) {
        const userFound = await UserSchema.findById(id).exec();

        if (!userFound) return null;

        return UserRepository.toDomain(userFound);

    }

    /**
     * Finds a user by email
     * @param {String} email User email
     * @return Domain user
     */
    static async findByEmail(email) {
        const userFound = await UserSchema.findOne({ email }).exec();

        if (!userFound) return null;

        return UserRepository.toDomain(userFound);
    }

    /**
     * @param {UserModel} domainUser Domain user
     */
    static async create(domainUser) {
        const persistanceUser = UserRepository.toPersistance(domainUser);

        const user = new UserSchema(persistanceUser);

        await user.save();
    }

}