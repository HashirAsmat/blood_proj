"use strict";
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const City2 = sequelize.define("cities2", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fk_country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });

  City2.beforeCreate((city) => {
    city.dataValues.createdAt = moment().unix();
    city.dataValues.updatedAt = moment().unix();
  });

  City2.beforeUpdate((city) => {
    city.dataValues.updatedAt = moment().unix();
  });
  return City2;
};
