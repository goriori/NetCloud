import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()
const sequelize = new Sequelize(process.env.AUTH_DB_NAME, process.env.AUTH_DB_LOGIN, process.env.AUTH_DB_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost',
    // port:process.env.AUTH_PORT,
    define: {
        timestamps: false 
    }
})

export default sequelize