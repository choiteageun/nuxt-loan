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
    insurance: DataTypes.BOOLEAN,
    overdue: DataTypes.INTEGER,
    propertyA: DataTypes.BOOLEAN,
    propertyB: DataTypes.STRING,
    manager_id: DataTypes.INTEGER,
    receptionist: DataTypes.STRING,
    enrollment_date: DataTypes.DATEONLY,
    enrollment_time: DataTypes.TIME,
    reserve_date: DataTypes.DATEONLY,
    reserve_time: DataTypes.TIME,
    owner: DataTypes.STRING,
    agency: DataTypes.STRING,
    period: DataTypes.STRING,
    marry: DataTypes.BOOLEAN,
    grade: DataTypes.STRING,
    coment: DataTypes.STRING,
    record: DataTypes.STRING,
    memo: DataTypes.STRING
  }, {});
  Consultation.associate = function(models) {
    // associations can be defined here
  };
  return Consultation;
};