import { ImageModel } from "../../domain/model/image-model";


export class ImageFindByIdUseCase {
    constructor({imageRepository}) {
        this.imageRepository = imageRepository;
    }

    async execute(id){
        const image = this.imageRepository.finddById(id);

        if(!image) {
            throw new Error('Image no encontrada');
        }

        return image;
    }
}