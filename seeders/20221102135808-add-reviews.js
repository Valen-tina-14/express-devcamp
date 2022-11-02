'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', 
                                      [{
                                        title: 'PHP reviews',
                                        text: 'Bootcamp for PHP learning',
                                        rating: 4,
                                        bootcamp_id: 1,
                                        user_id: 1
                                      },
                                      {
                                        title: 'PHP reviews',
                                        text: 'Bootcamp for PHP learning',
                                        rating: 4,
                                        bootcamp_id: 2,
                                        user_id: 2
                                      },
                                     {
                                      title: 'PHP reviews',
                                        text: 'Bootcamp for PHP learning',
                                        rating: 4,
                                        bootcamp_id: 3,
                                        user_id: 3
                                     },
                                ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('reviews', null, {});

  }
};

