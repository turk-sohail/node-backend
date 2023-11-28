'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("airplanes", [
      { modelNumber: "Etihad-802-b", capacity: 230, createdAt: new Date(), updatedAt: new Date() },
      { modelNumber: "Qattar-333-r", capacity: 113, createdAt: new Date(), updatedAt: new Date() },
      { modelNumber: "Euro-1-in", capacity: 130, createdAt: new Date(), updatedAt: new Date() },
      { modelNumber: "Qorno-802-viado", capacity: 177, createdAt: new Date(), updatedAt: new Date() }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
