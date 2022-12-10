import sequelize from "../db.js";
import {DataTypes} from 'sequelize'
const User = sequelize.define('Users', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'Не установлено'
    },
    surname:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"Не установлено"
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

export default User