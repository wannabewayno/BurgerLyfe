'use strict';
module.exports = (sequelize, DataTypes) => {

  const Burgers = sequelize.define('burgers', {
    name: DataTypes.STRING
  });
  Burgers.associate = function(models) {
    // associations can be defined here
  };
  return Burgers;
};