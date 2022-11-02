'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', 
                                      [{
                                        title: 'PHP courses',
                                        description: 'Bootcamp for PHP learning',
                                        weeks: 5,
                                        enroll_cost: 9900,
                                        minimum_skill:'medium',
                                        bootcamp_id: 1
                                      },
                                      {
                                        title: 'PHP courses',
                                        description: 'Bootcamp for PHP learning',
                                        weeks: 5,
                                        enroll_cost: 9900,
                                        minimum_skill: 'advanced',
                                        bootcamp_id: 2
                                      },
                                     {
                                      title: 'PHP courses',
                                      description: 'Bootcamp for PHP learning',
                                      weeks: 5,
                                      enroll_cost: 9900,
                                      minimum_skill: 'essential',
                                      bootcamp_id: 3
                                     },
                                ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('courses', null, {});

  }
};
