import { User } from "../model/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const signupUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ status: 400, message: "All fields are required" });
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const createUser = await User.create({
            username, email, password: passwordHash
        });

        const token = jwt.sign({ _id: createUser._id, email: createUser.email }, process.env.JWT_SECRET_KEY);

        return res.status(201).json({ status: 201, message: "User registered successfully", data: createUser, token });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
    }
}


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ status: 400, message: "All fields are required" });
        }

        // const existedUser = await User.findOne({ email }).then(res => res.toObject())
        const existedUser = await User.findOne({ email })
        if(!existedUser){
            return res.status(401).json({ status: 401, message: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, existedUser.password)

        if(!passwordMatch){
            return res.status(401).json({ status: 401, message: "Incorrect Password" });
        }

        // delete existedUser.password

        const isLoggedInUser = await User.findById(existedUser._id).select("-password")

        const token = jwt.sign({ _id: isLoggedInUser._id, email: isLoggedInUser.email }, process.env.JWT_SECRET_KEY);

        return res.status(201).json({ status: 201, message: "User Login successfully", data: isLoggedInUser, token });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password")
        return res.status(200).json({ status: 200, message: "Users fetched successfully", data: users });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
    }
}
