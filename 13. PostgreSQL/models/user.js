import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

// const userSchema = {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },

//     name: {
//         type: DataTypes.STRING(100),
//         allowNull: false,
//     },

//     email: {
//         type: DataTypes.STRING(150),
//         allowNull: false,
//         unique: true,
//     },

//     age: {
//         type: DataTypes.INTEGER,
//         allowNull: true,
//     }
// }

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, { tableName: 'users', timestamps: true });

export default User;