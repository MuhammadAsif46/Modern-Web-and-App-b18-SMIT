import express from "express"
import signupUser from "../controller/auth/signupUser.controller.js";
import loginUser from "../controller/auth/loginUser.controller.js";

const router = express.Router()


router.post("/register", signupUser)
router.post("/login", loginUser)

export default router;