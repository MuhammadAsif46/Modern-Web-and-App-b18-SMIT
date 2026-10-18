import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;
