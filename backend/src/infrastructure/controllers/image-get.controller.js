import { readFile } from 'fs';
import * as path from 'path';
import { UnnecesaryFieldsFormatException } from '../errors/unnecesary-fields.exception';

export class ImageFindByIdController {
    constructor({ imageFindByIdUseCase }) {
        this.imageFindByIdUseCase = imageFindByIdUseCase;
    }

    async execute(req, res, next) {
        const { id, ...rest } = req.params;

        try {
            if (!id) throw new Error('Debe especificar un ID');

            if (Object.keys(rest).length !== 0)
                throw new UnnecesaryFieldsFormatException();
            
            const pathImage = path.resolve(`../../../uploads/${id}`);

            if(!pathImage)
                throw new Error("Imagen no encontrada");

            return res.sendFile(pathImage);
                
        } catch (error) {
            next(error);
        }
    }
}
