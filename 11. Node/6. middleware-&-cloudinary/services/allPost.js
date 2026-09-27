import { Post } from "../model/post.model.js";

const allPost = async () => {
    return await Post.find();
}

export default allPost;