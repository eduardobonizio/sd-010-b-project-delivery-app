"use strict";
const SHA256 = require('crypto-js/sha256');
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "Lewis Hamilton",
          email: "a@a.com",
          password: SHA256('123456').words.join(''),
          role: "adm",
        },
        {
          id: 2,
          name: "Michael Schumacher",
          email: "b@b.com",
          password: SHA256('123456').words.join(''),
          role: "user",
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
