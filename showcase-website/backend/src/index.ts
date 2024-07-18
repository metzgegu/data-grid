import express from "express";
import cors from "cors";
import { deleteUser, getUsers, getUsersPaginated, updateUser } from "./user_controller";
import("./database/models");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
const port = 3001;

app.get("/users", getUsers);
app.get("/users/with_pagination", getUsersPaginated);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
