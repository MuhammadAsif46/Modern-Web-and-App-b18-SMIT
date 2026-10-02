import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    description: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });


export const Post = mongoose.model("Post", postSchema);