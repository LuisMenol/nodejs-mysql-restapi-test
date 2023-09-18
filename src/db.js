import { Sequelize, DataTypes } from 'sequelize'
import { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } from './config.js'


console.log(DB_HOST);

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql'
});


try {
    await sequelize.authenticate();


    sequelize.define('Employee', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING(45),
        salary: DataTypes.INTEGER
    });




} catch (error) {
    console.error('Unable to connect to the database:', error);
}



export { sequelize };










// import { createPool } from "mysql2/promise";

// const pool = createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'companydb'
// })

// export { pool };





// await sequelize.authenticate();

// const Employee = sequelize.define('Employee', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name: DataTypes.STRING(45),
//     salary: DataTypes.INTEGER
// });

// await Employee.sync();