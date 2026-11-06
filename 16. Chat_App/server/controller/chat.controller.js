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
                        from_id: req.currentUser._id, // asif
                        to_id: req.currentUser._id // meraj
                    }, 
                    { 
                        to_id: req.currentUser._id , // asif
                        from_id: req.currentUser._id // meraj
                    }
                ] }).sort({ createdAt: -1 });
        return res.status(200).json({ status: 200, message: "Chats fetched successfully", data: chats });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
    } 
}