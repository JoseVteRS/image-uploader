import { ImageModel } from '../../domain/model/image-model.js';
import { ImageSchema } from '../schemas/image.schema.js';

export class ImageRepository {
    toDomain(persistanceImage) {
        const { _id, title, src, format, size, height, width, createdAt } =
            persistanceImage;

        return new ImageModel(
            _id,
            title,
            src,
            format,
            size,
            height,
            width,
            createdAt
        );
    }

    toPersistance(domainImage) {
        const { id, title, src, format, size, height, width, createdAt } =
            domainImage;

        return {
            _id: id,
            title,
            src,
            format,
            size,
            height,
            width,
            createdAt,
        };
    }

    async findById(id) {
        const imageFound = await ImageSchema.findById(id).exec();
        if (!imageFound) return null;
        return this.toDomain(imageFound);
    }

    async upload(domainImage) {
        const persistanceImage = this.toPersistance(domainImage);
        const image = new ImageSchema(persistanceImage);
        await image.save();
    }
}
