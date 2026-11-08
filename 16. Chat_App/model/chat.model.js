import mongoose from "mongoose"

const chatSchema = new mongoose.Schema({
    from_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    from_username: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    from_email: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    to_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    // imageUrl: {
    //     type: mongoose.Schema.Types.String,
    //     required: false
    // },
    // isRead: {
    //     type: mongoose.Schema.Types.Boolean,
    //     default: false // Track: whether the message has been read or not
    // }
}, { timestamps: true }
);

export const Chat = mongoose.model("Chat", chatSchema)