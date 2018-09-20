'use strict';
module.exports = (sequelize, DataTypes) => {
  var Notememo = sequelize.define('Notememo', {
    userId: DataTypes.INTEGER,
    note: DataTypes.STRING
  }, {});
  Notememo.associate = function(models) {
    // associations can be defined here
  };
  return Notememo;
};