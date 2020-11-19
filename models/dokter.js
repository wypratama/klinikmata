'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dokter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dokter.belongsToMany(models.Pasien, {
        through: models.Treatment,
        foreignKey: 'DokterId',
      });
    }
  };
  Dokter.init({
    Nama: DataTypes.STRING,
    No_Izin: DataTypes.INTEGER,
    Alamat: DataTypes.STRING,
    No_Telepon: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dokter',
  });
  return Dokter;
};