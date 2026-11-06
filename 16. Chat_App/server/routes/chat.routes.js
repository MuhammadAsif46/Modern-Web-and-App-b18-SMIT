import express from "express"
import { getChats, sendMessage } from "../controller/chat.controller.js";

const router = express.Router()

router.get("/get-chats", getChats)
router.post("/send-message", sendMessage)

export default router;