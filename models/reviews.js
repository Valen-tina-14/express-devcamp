'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init({
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
    
    text: {
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

    rating: {
            type: DataTypes.INTEGER,
             allowNull: false,
             validate:{
             isInt:{
             args: true,
               msg: 'Debe contener solo numeros'
             },
               notEmpty: {
               args: true,
               msg: 'text no debe ser vacio'
               },
                notNull: {
               args: true,
               msg: 'text debe estar presente'
               }
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
          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
              notNull: {
                args: true,
                msg: 'user_id debe estar presente'
              },
              notEmpty: {
                args: true,
                msg: 'user_id no debe ser vacio'
              },
            }
          },
        }, {
          sequelize,
          modelName: 'Reviews',
          timestamps: false
         });
         return Reviews;
      };
      
      
    
    
         