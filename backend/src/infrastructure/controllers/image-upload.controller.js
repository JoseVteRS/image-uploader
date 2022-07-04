import sizeOf from 'image-size';
export class ImageUploadController {
    constructor({ imageUploadUseCase }) {
        this.imageUploadUseCase = imageUploadUseCase;
    }

    async execute(req, res, next) {
        const { files, ...rest } = req.body;
        try {

            if (!files || Object.keys(files).length === 0) return res.status(400).send({ message: 'No files were uploaded' })

            let file = files.image;
            let filename = file.name;

            file.mv(`./uploads/${filename}`, (err) => {
                if (err) res.send(err)
                sizeOf(`./uploads/${filename}`, (err, dimensions) => {
                    if (err) return;
                    return res.status(200).send({ name: filename, width: dimensions.width, height: dimensions.height })
                })
            })

        } catch (error) {
            return res.status(400).send({ message: 'Can\'t upload the image' })
        }
    }
}
