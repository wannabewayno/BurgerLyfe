'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burgers = sequelize.define('Burgers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    // createdAt: {
    //   allowNull: false,
    //   type: 'TIMESTAMP',
    //   defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    // },
    // updatedAt: {
    //   allowNull: false,
    //   type: 'TIMESTAMP',
    //   defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    // }
  });
  
  return Burgers;
};