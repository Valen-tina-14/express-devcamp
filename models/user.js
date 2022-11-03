'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        unique(value) {
          return User.findOne({where:{username:value}})
            .then((username) => {
              if (username) {
                throw new Error('Error el username debe ser unico');

              }
            })
        },
        isAlpha: {
          args: true,
          msg: 'username debe tener solo letras'
        },
        notNull: {
          args: true,
          msg: 'username debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'username no debe ser vacio'
        },
      }
        }, 
        email:{
          type:DataTypes.STRING,
          validate:{
            isEmail:{
              args: true,
              msg: 'username no debe ser vacio'
            }
          }
        },  
        password:{
          type: DataTypes.STRING,
          validate:{
            min:{
              args: [5,10],
              msg: 'password minimo de 5 y maximo de 10 caracteres'
            },
            max:{
              args: 10,
              msg: 'password minimo de 10 caracteres'
            }
          }
        }
      }, { 
        sequelize,
        modelName: 'User',
        timestamps: false
      });
      return User;
    };
    
    
         