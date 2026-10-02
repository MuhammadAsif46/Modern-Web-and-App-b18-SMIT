import { Post } from "../../model/post.model.js";
import allPost from "../../services/allPost.js";

const getAllPost = async (req, res) => {
    try {
        const { skip, limit } = req.query;
        const skips = Number(skip) || 0;
        const limits = Number(limit) || 5;
        const posts = await allPost(skips, limits);
        res.status(200).json({ status: 200, message: "All posts retrieved successfully", data: posts });

    } catch (error) {
        res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
    }
}


export default getAllPost;