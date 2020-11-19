'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Treatments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Perawatan: {
        type: Sequelize.STRING,
      },
      Resep: {
        type: Sequelize.STRING,
      },
      Jadwal: {
        type: Sequelize.DATE,
      },
      PasienId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pasiens',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      DokterId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Dokters',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Treatments');
  },
};
