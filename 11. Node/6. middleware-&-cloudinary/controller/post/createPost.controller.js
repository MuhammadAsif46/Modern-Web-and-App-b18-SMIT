import { Post } from "../../model/post.model.js";

const createPost = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ status: 400, message: "Title and description are required" });
        }
        const post = await Post.create({ title, description });
        res.status(201).json({ status: 201, message: "Post created successfully", data: post });
    } catch (error) {
        res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
    }
}


export default createPost;