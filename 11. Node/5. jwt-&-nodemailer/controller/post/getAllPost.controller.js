import { Post } from "../../model/post.model.js";

const getAllPost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({ status: 200, message: "All posts retrieved successfully", data: posts });
    } catch (error) {
        res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
    }
}


export default getAllPost;