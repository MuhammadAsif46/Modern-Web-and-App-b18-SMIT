import User from "../models/user.js";
import sequelize from "./sequelize.js";



const connectDB = async () => {
    try {
        await sequelize.authenticate();

        await User.sync();
        // await sequelize.sync();
        console.log('Connection has been established successfully.');

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export { sequelize, connectDB };
