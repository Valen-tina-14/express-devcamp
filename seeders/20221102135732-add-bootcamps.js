'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('bootcamps', 
                                      [{
                                        name: 'PHP Bootcamps',
                                        description: 'Bootcamp for PHP learning',
                                        phone: '(57)300 661 8768',
                                        average_cost: 5900,
                                        average_rating: 3,
                                        user_id: 1
                                      },
                                      {
                                        name: 'Express Backend',
                                        description: 'Bootcamp for JAVA learning',
                                        phone: '(57)310 616 1129',
                                        average_cost: 5900,
                                        average_rating: 3,
                                        user_id: 2
                                      },
                                     {
                                        name: 'CSS Bootcamp',
                                        description: 'Bootcamp for CSS learning',
                                        phone: '(57)313 436 3535',
                                        average_cost: 5900,
                                        average_rating: 3,
                                        user_id: 3
                                     },
                                ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('bootcamps', null, {});

  }
};
