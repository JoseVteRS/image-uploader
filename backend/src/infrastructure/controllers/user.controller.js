import { userRegisterUseCase } from "../../application/use-cases/user-registration.usecase";
import { MissingFieldsFormatException } from "../errors/missing-fields.exception";



export const userRegisterController = (req, res, next) => {
    const { id, name, email, password, ...rest } = req.body;

    try {
        if (id || !name || !email || !password)
            throw new MissingFieldsFormatException();

        await userRegisterUseCase(id, name, email, password);
        res.status(201).send();
    } catch (error) {
        next(error);
    }

}

