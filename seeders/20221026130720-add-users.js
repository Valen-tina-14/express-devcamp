'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      username: 'Valentinita',
      email:'vcastro619@misena.edu.co',
      password:'123456'
    },
    {
      username: 'pedro',
      email:'pedro@misena.edu.co',
       password:'3456'  
        },
      {
      username: 'Vero',
      email:'vero@misena.edu.co',
      password:'1456'  
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users',null, {});
   
  }
};
