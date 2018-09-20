'use strict';
module.exports = (sequelize, DataTypes) => {
  var Consultation = sequelize.define('Consultation', {
    name: DataTypes.STRING,
    tel: DataTypes.STRING,
    loanAmount: DataTypes.STRING,
    InquiryContents: DataTypes.STRING,
    note: DataTypes.STRING,
    situation: DataTypes.STRING,
    route: DataTypes.STRING,
    birth: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    jobGroup: DataTypes.STRING,
    about: DataTypes.STRING,
    income: DataTypes.INTEGER,
    insurance: DataTypes.INTEGER,
    overdue: DataTypes.INTEGER,
    propertyA: DataTypes.INTEGER,
    propertyB: DataTypes.STRING,
    manager: DataTypes.STRING,
    receptionist: DataTypes.STRING,
    enrollment: DataTypes.STRING,
    owner: DataTypes.STRING,
    agency: DataTypes.STRING,
    period: DataTypes.STRING,
    marry: DataTypes.STRING,
    grade: DataTypes.STRING
  }, {});
  Consultation.associate = function(models) {
    // associations can be defined here
  };
  return Consultation;
};