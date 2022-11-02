'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //crear la columna 'user_id' FK con users
   //addColumn: parametros:
   // 1. la tabla en la cual poner la nueva columna
   // 2. nombre de la nueva columna
   // 3. opciones de la nueva columna
   await queryInterface.addColumn('reviews',
   'bootcamp_id',
   {
     type: Sequelize.INTEGER,
     references: {
       model: 'bootcamps',
       key: 'id'
     } ,
     onUpdate: 'CASCADE',
     onDelete:  'SET NULL'                   
   }),
   await queryInterface.addColumn('reviews',
   'user_id',
   {
     type: Sequelize.INTEGER,
     references: {
       model: 'users',
       key: 'id'
     } ,
     onUpdate: 'CASCADE',
     onDelete:  'SET NULL'                   
   })


  },

  async down (queryInterface, Sequelize) {
   // metodo remove Column
    // parametros: 1. la tabla dodnde se va a remover la columna 
    //2. la columna eliminar
    await queryInterface.removeColumn('reviews' , 'bootcamp_id' , 'user_id')
  }
};