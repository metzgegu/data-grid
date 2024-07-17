import { Sequelize } from "sequelize-typescript";
import config from "../config.js";

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
); // Example for postgres

export default sequelize;
