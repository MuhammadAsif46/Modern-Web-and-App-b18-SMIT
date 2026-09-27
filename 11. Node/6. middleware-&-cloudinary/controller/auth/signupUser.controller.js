import { User } from "../../model/auth.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Joi from "joi"
import transporter from "../../helpers/index.js";

const userSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
    phone: Joi.number().optional(),
})

const signupUser = async (req, res) => {
    try {

        await userSchema.validateAsync(req.body)

        const { username, email, password, phone } = req.body;
        // if (!username || !email || !password || !phone) {
        //     return res.status(400).json({ status: 400, message: "All fields are required" });
        // }

        const passwordHash = await bcrypt.hash(password, 10)

        const createUser = await User.create({
            username, email, password: passwordHash, phone
        });

        const token = jwt.sign({ userId: createUser._id }, "SMIT_BATCH_18", { expiresIn: "24h" })

        transporter.sendMail({
            from: process.env.SMTP_USER,
            to: createUser.email,
            subject: "Welcome to Our Application",
            text: `Hello ${createUser.username},\n\nWelcome to our application! We're excited to have you on board.\n\nBest regards,\nThe Team`,
        })

        return res.status(201).json({ status: 201, message: "User registered successfully", data: createUser, token });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
    }
}

export default signupUser;