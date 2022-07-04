import sizeOf from 'image-size';
import uuid from 'uuid-random';
export class ImageUploadController {
    constructor({ imageUploadUseCase }) {
        this.imageUploadUseCase = imageUploadUseCase;
    }

    async execute(req, res, next) {
        try {

            if (!req.files || Object.keys(req.files).length === 0)
                return res
                    .status(400)
                    .send({ message: 'No files were uploaded' });

            let file = req.files.file;
            let filename = file.name;

            file.mv(`./uploads/${filename}`, (err) => {
                if (err) res.send(err);
                sizeOf(`./uploads/${filename}`, async (err, dimensions) => {
                    if (err) return;

                    await this.imageUploadUseCase.execute(
                        req.body.id,
                        filename,
                        `http://localhost:3001/image/${req.body.id}.${dimensions.type}`,
                        dimensions.type,
                        file.size,
                        dimensions.height,
                        dimensions.width
                    );
                    return res.status(200).send({
                        id: req.body.id,
                        name: filename,
                        src: `http://localhost:3001/image/${req.body.id}.${dimensions.type}`,
                        type: dimensions.type,
                        size: file.size,
                        width: dimensions.width,
                        height: dimensions.height,
                    });
                });
            });
        } catch (error) {
            return res.status(400).send({ message: "Can't upload the image" });
        }
    }
}
