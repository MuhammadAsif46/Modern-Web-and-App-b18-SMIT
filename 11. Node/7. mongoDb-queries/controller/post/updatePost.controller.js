import { Post } from "../../model/post.model.js";

const updatePost = async (req, res) => {
    try {
        const { title, description } = req.body;
        const { id } = req.params;

        if (!title || !description) {
            return res.status(400).json({ status: 400, message: "Title and description are required" });
        }
        const post = await Post.findByIdAndUpdate(id, { title, description }, { new: true });
        return res.status(200).json({ status: 200, message: "Post updated successfully", data: post });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
    }
}


export default updatePost;