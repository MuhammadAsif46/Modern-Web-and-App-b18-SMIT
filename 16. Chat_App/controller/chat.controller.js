import { globalSocketIo } from "../core.js";
import {Chat} from "../model/chat.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { to_id, message } = req.body;
        const newMessage = await Chat.create({
            from_id: req.currentUser._id,
            from_username: req.currentUser.username,
            from_email: req.currentUser.email,
            to_id,
            message
        });
        globalSocketIo.io.to(`user:${String(to_id)}`).emit("newMessage", newMessage);
        return res.status(201).json({ status: 201, message: "Message sent successfully", data: newMessage });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
}
}

export const getChats = async (req, res) => {
    try {
        const chats = await Chat.find({
            $or: [
                { 
                    from_id: req.params.id,
                    to_id: req.currentUser._id 
                },
                {
                    from_id: req.currentUser._id,
                    to_id: req.params.id
                }
            ]
        })
        return res.status(200).json({ status: 200, message: "Chats retrieved successfully", data: chats });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
    }
}


from_id: 101 // 
to_id: 202 //

to_id: 101
from_id: 202