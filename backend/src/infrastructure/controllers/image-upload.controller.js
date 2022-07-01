import multer from 'multer';

export class ImageUploadController {
    constructor({ imageUploadUseCase }) {
        this.imageUploadUseCase = imageUploadUseCase;
    }

    async execute(req, res, next) {
        try {
            const storage = multer.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, '/tmp/my-uploads');
                },
                filename: (req, file, cb) => {
                    cb(null, `${file.filename}-image.jpg`);
                },
            });
            return multer({ storage });
        } catch (error) {
            next(error);
        }
    }
}
