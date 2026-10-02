import express from "express"
import uploadImage from "../controller/uploadImage.controller.js";
import multer from "multer";

const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "images"); // Files will be saved in the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

// 2. Initialize Multer instance
const upload = multer({ storage: storage });


router.post("/upload", upload.single('file'), uploadImage)


export default router;