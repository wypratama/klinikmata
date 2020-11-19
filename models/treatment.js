'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treatment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Treatment.belongsToMany(models.Pasien, {
        through: models.PasienTreatment,
        foreignKey: 'treatmentId',
      });
    }
  }
  Treatment.init(
    {
      Perawatan: DataTypes.STRING,
      Resep: DataTypes.STRING,
      Jadwal: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Treatment',
    }
  );
  return Treatment;
};
