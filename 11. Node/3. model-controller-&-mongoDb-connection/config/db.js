import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect("")
        console.log("MongoDb Connected!");
    } catch (err) {
        console.log("MongoDb Connection Failed!" ,err);
    }
}

export default connectDb;
