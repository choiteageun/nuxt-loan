'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return[
      queryInterface.addColumn("Users", "name",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Users", "tel",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Users", "age",{
        type: Sequelize.INTEGER
      })
    ]
  },

  down: (queryInterface, Sequelize) => {
    return[
      queryInterface.removeColumn("Users", "name"),
      queryInterface.removeColumn("Users", "tel"),
      queryInterface.removeColumn("Users", "age") 
    ]
  }
};
