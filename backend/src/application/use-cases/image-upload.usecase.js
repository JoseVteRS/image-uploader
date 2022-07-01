import { ImageModel } from "../../domain/model/image-model.js";



export class ImageUploadUseCase {
    constructor({imageRepository}) {
        this.imageRepository = imageRepository;
    }

    async execute(id, title, src, format, size, height, width, createdAt) {
        const newImage = await ImageModel.upload(id, title, src, format, size, height, width, createdAt);

        // Comprobar si exite id duplicado
        const existingImageById = this.imageRepository.findById(id);
        if(existingImageById)
            throw new Error("El ID de la imagen ya existe");

        await this.imageRepository.upload(newImage);

    }
}