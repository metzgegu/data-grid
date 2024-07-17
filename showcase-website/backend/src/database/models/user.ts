import { type Optional } from "sequelize";
import { Table, Model, Column, DataType } from "sequelize-typescript";

export interface UserAttributes {
  id: number;
  name: string;
  birthdate: Date;
  email: string;
  address: string;
  phone: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

@Table
export default class User extends Model<
  UserAttributes,
  UserCreationAttributes
> {
  @Column(DataType.STRING)
  name: string | undefined;

  @Column(DataType.DATE)
  birthdate: Date | undefined;

  @Column(DataType.STRING)
  email: string | undefined;

  @Column(DataType.STRING)
  address: string | undefined;

  @Column(DataType.STRING)
  phone: string | undefined;
}
