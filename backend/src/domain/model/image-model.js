export class ImageModel {
    /**
     * Constructor
     * @param {String} id Image unique identificator
     * @param {String} title Image title
     * @param {String} src Image filename
     * @param {ImageFormat} format Image format
     * @param {Number} size Image size in bytes
     * @param {Number} height Image height in pixels
     * @param {Number} width Image width in pixels
     * @param {Date} createdAt Image creation date
     */
    constructor(id, title, src, format, size, height, width) {
        this.id = id;
        this.title = title;
        this.src = src;
        this.format = format;
        this.size = size;
        this.height = height;
        this.width = width;
    }

    static async upload(id, title, src, format, size, height, width) {
        return new ImageModel(id, title, src, format, size, height, width);
    }
}
