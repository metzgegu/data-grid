"use strict";

import { generateUsersWithFaker } from "../utils/generateUsers";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    /**
     * Add seed commands here.
     *
     * Example:

    */
    const users = generateUsersWithFaker(1000);
    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface: any, Sequelize: any) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
