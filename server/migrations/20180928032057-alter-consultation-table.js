"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.changeColumn("Consultations", "insurance", {
        type: Sequelize.BOOLEAN
      }),
      queryInterface.changeColumn("Consultations", "propertyA", {
        type: Sequelize.BOOLEAN
      }),
      queryInterface.changeColumn("Consultations", "marry", {
        type: Sequelize.BOOLEAN
      }),
      queryInterface.changeColumn("Consultations", "enrollment", {
        type: Sequelize.DATEONLY
      }),
      queryInterface.renameColumn(
        "Consultations",
        "enrollment",
        "enrollment_date"
      ),
      queryInterface.addColumn("Consultations", "enrollment_time", {
        type: Sequelize.TIME
      }),
      queryInterface.addColumn("Consultations", "reserve_date", {
        type: Sequelize.DATEONLY
      }),
      queryInterface.addColumn("Consultations", "reserve_time", {
        type: Sequelize.TIME
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.changeColumn("Consultations", "insurance", {
        type: Sequelize.INTEGER
      }),
      queryInterface.changeColumn("Consultations", "propertyA", {
        type: Sequelize.INTEGER
      }),
      queryInterface.changeColumn("Consultations", "marry", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Consultations", "enrollment_date", {
        type: Sequelize.STRING
      }),
      queryInterface.renameColumn(
        "Consultations",
        "enrollment_date",
        "enrollment"
      ),
      queryInterface.removeColumn("Consultations", "enrollment_time"),
      queryInterface.removeColumn("Consultations", "reserve_date"),
      queryInterface.removeColumn("Consultations", "reserve_time")
    ];
  }
};
