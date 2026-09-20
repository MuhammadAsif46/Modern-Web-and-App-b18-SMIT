import { User } from "../../model/auth.model.js";
import bcrypt from "bcrypt"

const loginUser = async (req, res) => {
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

        return res.status(201).json({ status: 201, message: "User Login successfully", data: isLoggedInUser });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
    }
}

export default loginUser;