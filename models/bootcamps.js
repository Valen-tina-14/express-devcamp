'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bootcamps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bootcamps.init({
    name: {
      type:DataTypes,stringify,
      allowNull:false,
      validate:{
        isAlpha:{
          args:true,
          msg: 'Este Bootcamp solo debe tener letras'
        },
        notNull: {
          args: true,
          msg: 'Este Bootcamp debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'Este Bootcamp no debe ser vacio'
        },
        unique(value){
          return Bootcamps.findOne({where:{name:value}})
          .then((name) => {
            if (name) {
              throw new Error('Este nombre de Bootcamps ya existe');
            }
          })
        },
      }
    },

    description:{
      type: DataTypes.STRING,
      validate:{
        isDescription:{
          args: true,
          msg: 'Esta Descripcion no debe ser vacia'
        },
      },
    },

    phone:{
      type: DataTypes.STRING,
      validate:{
        isDescription:{
          args: true,
          msg: 'Esta Telefono no debe ser vacio'
        },
        len:{
          args:[10],
          msg:"Phone debe ser de 10 caracteres "
         } 
      }
    },
    average_rating:{ 
     type: DataTypes.INTEGER,
    },
    average_cost: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Bootcamps',
  });
  return bootcamps;
};























