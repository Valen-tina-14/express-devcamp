'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'title debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'title no debe ser vacio'
        },
      }
    },
    
    description: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'text debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'text no debe ser vacio'
        },
      }
    },
    weeks:{
      type: DataTypes.INTEGER,
      validate:{
        len:{
          args:[1],
          msg:"debe contener solo un numero"
        },
      }
    },
      enroll_cost: {
        type: DataTypes.INTEGER,
             allowNull: false,
             validate:{
             isInt:{
             args: true,
               msg: 'Debe contener solo numeros'
             },
               notEmpty: {
               args: true,
               msg: 'enroll_cost no debe ser vacio'
               },
                notNull: {
               args: true,
               msg: 'enroll_cost debe estar presente'
           },
          }
        },
        minimum_skill: {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{
          isInt:{
          args: true,
            msg: 'Debe contener solo numeros'
          },
            notEmpty: {
            args: true,
            msg: 'minimum_skill no debe ser vacio'
            },
             notNull: {
            args: true,
            msg: 'minimum_skill debe estar presente'
          },
       }
    },
        bootcamp_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate:{
            notNull: {
              args: true,
            msg: 'bootcamp_id debe estar presente'
            },
          notEmpty: {
             args: true,
             msg: 'bootcamp_id no debe ser vacio'
           },
        }
      }, 
    },{
          sequelize,
          modelName: 'Courses',
          timestamps: false
         });
         return Courses;
      };
      
      
    
    
         