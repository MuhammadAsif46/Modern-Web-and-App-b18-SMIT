import express from "express"
import { getAllUsers, loginUser, signupUser } from "../controller/user.controller.js";

const router = express.Router()

router.post("/signup", signupUser)
router.post("/login", loginUser)
router.get("/allUsers", getAllUsers)

export default router;