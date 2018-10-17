"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("Consultations", "coment", {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "record", {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "memo", {
        type: Sequelize.STRING
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn("Consultations", "coment"),
      queryInterface.removeColumn("Consultations", "record"),
      queryInterface.removeColumn("Consultations", "memo")
    ];
  }
};
