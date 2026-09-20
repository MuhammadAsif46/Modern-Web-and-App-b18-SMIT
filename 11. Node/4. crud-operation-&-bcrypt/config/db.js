import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("MongoDb Connected!");
    } catch (err) {
        console.log("MongoDb Connection Failed!" ,err);
    }
}

export default connectDb;
