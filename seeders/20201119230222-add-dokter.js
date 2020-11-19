'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert ('Dokters', [
     {
       Nama: 'Ahmad Subari',
       No_Izin : Math.floor(Math.random()*999999999),
       Alamat: 'Jakarta',
       No_Telepon: Math.floor(Math.random()*876544321),
       createdAt: new Date (),
       updatedAt: new Date ()
     },
     {
      Nama: 'Pohiman Poan',
      No_Izin : Math.floor(Math.random()*999999999),
      Alamat: 'Jakarta',
      No_Telepon: Math.floor(Math.random()*876544321),
      createdAt: new Date (),
      updatedAt: new Date ()
    },
    {
      Nama: 'Masilar Silur',
      No_Izin : Math.floor(Math.random()*999999999),
      Alamat: 'Jakarta',
      No_Telepon: Math.floor(Math.random()*876544321),
      createdAt: new Date (),
      updatedAt: new Date ()
    },
    {
      Nama: 'Roman Romana',
      No_Izin : Math.floor(Math.random()*999999999),
      Alamat: 'Jakarta',
      No_Telepon: Math.floor(Math.random()*876544321),
      createdAt: new Date (),
      updatedAt: new Date ()
    },
    {
      Nama: 'Susanti Santi',
      No_Izin : Math.floor(Math.random()*999999999),
      Alamat: 'Jakarta',
      No_Telepon: Math.floor(Math.random()*876544321),
      createdAt: new Date (),
      updatedAt: new Date ()
    }
   ])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Dokters', null, {})
  }
};
