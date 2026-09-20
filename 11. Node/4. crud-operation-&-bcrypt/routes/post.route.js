import express from "express"
import getAllPost from "../controller/post/getAllPost.controller.js";
import createPost from "../controller/post/createPost.controller.js";
import updatePost from "../controller/post/updatePost.controller.js";
import deletePost from "../controller/post/deletePost.controller.js";

const router = express.Router()


router.get("/getAllPosts", getAllPost)
router.post("/createPost", createPost)
router.put("/updatePost/:id", updatePost)
router.delete("/deletePost/:id", deletePost)

export default router;