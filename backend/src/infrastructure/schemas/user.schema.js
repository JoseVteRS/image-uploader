import { model, Schema } from "mongoose";



const schema = new Schema({
    _id: { type: String, _id: false },
    email: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String, required: false },
    images: [{ type: [String], required: false }],
});

export const UserSchema = model("User", schema);