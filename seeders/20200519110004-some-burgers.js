'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('burgers', [
      { name: 'Curry Burger',  },
      { name: 'Cheese Burger', },
      { name: 'Buffalo Fried Chicken Burger',  },
      { name: 'Ranch Burger',  },
      { name: 'Pumpkin Ravioli Burger',  }
    ]);
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('burgers', null, {});
  }
};
