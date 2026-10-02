import { Post } from "../model/post.model.js";

const addPost = async (postData) => {
   const post = await Post(postData);
   return await post.save();
}

export default addPost;