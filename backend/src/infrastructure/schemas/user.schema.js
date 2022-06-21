import mongoose from "mongoose";



const schema = new mongoose.Schema({
    _id: { type: String, _id: false },
    email: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String, required: false },
    images: [{ type: [String], required: false }],
});

export const UserSchema = mongoose.model("User", schema);