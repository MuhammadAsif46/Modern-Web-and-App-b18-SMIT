
import addPost from "../../services/addPost.js";
import Joi from "joi";

const postSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string().required(),
})

const createPost = async (req, res) => {
    try {
        await postSchema.validateAsync(req.body)
        const post = await addPost(req.body);

        res.status(201).json({ status: 201, message: "Post created successfully", data: post });
    } catch (error) {
        res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
    }
}


export default createPost;