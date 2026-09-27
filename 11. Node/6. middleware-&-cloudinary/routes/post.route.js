import express from "express"
import getAllPost from "../controller/post/getAllPost.controller.js";
import createPost from "../controller/post/createPost.controller.js";
import updatePost from "../controller/post/updatePost.controller.js";
import deletePost from "../controller/post/deletePost.controller.js";
import verifyToken from "../middlewares/verfiyToken.js";

const router = express.Router()


router.get("/getAllPosts",verifyToken, getAllPost)
router.post("/createPost", verifyToken, createPost)
router.put("/updatePost/:id", verifyToken, updatePost)
router.delete("/deletePost/:id", verifyToken, deletePost)

export default router;