import mongoose from "mongoose";
import { ImageFormat } from "../../domain/constants/image-format.constant.js";


const schema = new mongoose.Schema({
    _id: {type: String, _id:false},
    title: {type: String},
    src: {type: String},
    format: {type: String},
    size: {type: Number},
    height: {type: Number},
    width: {type: Number},
    createdAt: {type: Date}
});


export const ImageSchema = mongoose.model("Image", schema);


