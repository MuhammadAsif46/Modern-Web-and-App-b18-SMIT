import fs from "fs";

import { v2 as cloudinary } from 'cloudinary';

// Configuration
cloudinary.config({
    cloud_name: 'aknhaukj',
    api_key: '793566488469819',
    api_secret: '6ZBQ605-lH5DUKaVhcJXxBSjM8w' // Click 'View API Keys' above to copy your API secret
});


const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ message: 'Please upload a file' });
        }

        const uploadFile = await cloudinary.uploader.upload(`smit-batch-18/${req.file.path}`, (error, result) => {

            fs.unlink(req.file.path, (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                }
            });

            if (error) {
                return res.status(500).send({ message: 'Error uploading file', error });
            }

            res.status(200).send({
                message: 'File uploaded successfully!',
                url: result.url,
                status: 200,
                success: true
            });
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

export default uploadImage;