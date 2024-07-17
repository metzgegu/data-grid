import { Sequelize, type SequelizeOptions } from "sequelize-typescript";
import User from "./user";
import config from "../config";

const sequelize = new Sequelize(
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  {
    ...config.development,
  } as SequelizeOptions,
);

sequelize.addModels([User]);

export { Sequelize, sequelize };
