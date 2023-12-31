'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addConstraint("Airports", {
      type: "FOREIGN KEY",
      name: "city_fkey_constraint",
      fields: ["cityId"],
      references: {
        table: "Cities",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    })

  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint("Airports", "city_fkey_constraint");
  }
};
