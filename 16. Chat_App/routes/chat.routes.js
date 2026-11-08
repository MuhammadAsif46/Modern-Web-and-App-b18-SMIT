import express from "express"
import { getChats, sendMessage } from "../controller/chat.controller.js";
import verifyToken from "../middlewares/verfiyToken.js";

const router = express.Router()

router.get("/messages/:id", verifyToken, getChats)
router.post("/send-message",verifyToken, sendMessage)

export default router;