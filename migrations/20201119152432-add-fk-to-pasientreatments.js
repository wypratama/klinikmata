'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint('Treatments', {
      fields: ['PasienId'],
      type: 'foreign key',
      name: 'add-pasien-fk-constraint',
      references: {
        table: 'Pasiens',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint(
      'PasienTreatments',
      'add-pasien-fk-constraint',
      {}
    );
  },
};
