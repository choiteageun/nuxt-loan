'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.changeColumn("Consultations", "manager", {
        type: Sequelize.INTEGER
      }),
      queryInterface.renameColumn(
        "Consultations",
        "manager",
        "manager_id"
      ),
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.changeColumn("Consultations", "manager_id", {
        type: Sequelize.STRING
      }),
      queryInterface.renameColumn(
        "Consultations",
        "manager_id",
        "manager"
      ),
    ]
  }
};
