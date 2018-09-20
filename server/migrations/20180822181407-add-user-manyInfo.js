'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return[
      queryInterface.addColumn("Consultations", "situation",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "route",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "birth",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "jobTitle",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "jobGroup",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "about",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "income",{
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn("Consultations", "insurance",{
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn("Consultations", "overdue",{
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn("Consultations", "propertyA",{
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn("Consultations", "propertyB",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "manager",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "receptionist",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "enrollment",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "owner",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "agency",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "period",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "marry",{
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Consultations", "grade",{
        type: Sequelize.STRING
      })
    ]
  },

  down: (queryInterface, Sequelize) => {
    return[
      queryInterface.removeColumn("Consultations", "situation"),
      queryInterface.removeColumn("Consultations", "route"),
      queryInterface.removeColumn("Consultations", "birth"),
      queryInterface.removeColumn("Consultations", "jobTitle"),
      queryInterface.removeColumn("Consultations", "jobGroup"),
      queryInterface.removeColumn("Consultations", "about"),
      queryInterface.removeColumn("Consultations", "income"),
      queryInterface.removeColumn("Consultations", "insurance"),
      queryInterface.removeColumn("Consultations", "overdue"),
      queryInterface.removeColumn("Consultations", "propertyA"),
      queryInterface.removeColumn("Consultations", "propertyB"),
      queryInterface.removeColumn("Consultations", "manager"),
      queryInterface.removeColumn("Consultations", "receptionist"),
      queryInterface.removeColumn("Consultations", "enrollment"),
      queryInterface.removeColumn("Consultations", "owner"),
      queryInterface.removeColumn("Consultations", "agency"),
      queryInterface.removeColumn("Consultations", "period"),
      queryInterface.removeColumn("Consultations", "marry"),
      queryInterface.removeColumn("Consultations", "grade")  
    ]
  }
};
