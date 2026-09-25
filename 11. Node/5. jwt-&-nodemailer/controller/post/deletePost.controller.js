import { Post } from "../../model/post.model.js";

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await Post.findByIdAndDelete(id);
        return res.status(200).json({ status: 200, message: "Post deleted successfully" });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
    }
}

export default deletePost;
