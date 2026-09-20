import { User } from "../../model/auth.model.js";
import bcrypt from "bcrypt"

const signupUser = async (req, res) => {
    try {
        const { username, email, password, phone } = req.body;
        if (!username || !email || !password || !phone) {
            return res.status(400).json({ status: 400, message: "All fields are required" });
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const createUser = await User.create({
            username, email, password: passwordHash, phone
        });
        return res.status(201).json({ status: 201, message: "User registered successfully", data: createUser });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
    }
}

export default signupUser;