const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create our user model
class User extends Model {};

// define table columns and configuration
User.init(
   {
       //define id column
       id: {
           type: DataTypes.INTEGER,
           allowNull: false,   
           primaryKey: true,
           autoIncrement: true
       },
       //define username column 
       username: {
           type: DataTypes.STRING,
           allowNull: false,
       },
       //define email column 
       email: {
           type: DataTypes.STRING,
           allowNull: false, 
           //cannot have duplicate values in this table
           unique: true,
           validate: {
               isEmail: true 
           }
       },
       //define passwrod column
       password: {
           type: DataTypes.STRING,
           allowNull: false,
           validate: {
               //this will verify if the password is at least 4 characters long
               len: [4]
           }
       }
   },
   {
       sequelize,
       timestamps: false,
       freezeTableName: true,
       underscored: true,
       modelName: 'user'
   }
);
  
  module.exports = User;