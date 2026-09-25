import mongoose from "mongoose";
import chalk from "chalk";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_DB_URI)
        console.log(chalk.bgGreen("MongoDb Connected!"));
    } catch (err) {
        console.log(chalk.bgRed("MongoDb Connection Failed!"), err);
    }
}

export default connectDb;
