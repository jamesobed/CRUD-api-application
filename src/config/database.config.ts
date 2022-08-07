import { Sequelize } from "sequelize";

// const db = new Sequelize("app", "user","password");
const db = new Sequelize("app", "", "", {
  storage: "./database.sqlite",
  dialect: "sqlite",
  logging: false,
});

export default db;
