import express from "express";
import cors from "cors";
import user from "./database/models/user";
import type User from "./database/models/user";
import("./database/models");

const app = express();
app.use(cors());
const port = 3001;

const paginate = async (
  user: typeof User,
  page: number,
  limit: number,
  sortBy: string | undefined,
  sortDirection: "ASC" | "DESC",
) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const usersCount = await user.count();

  const results: {
    next?: { page: number; limit: number };
    previous?: { page: number; limit: number };
  } = {};

  if (endIndex < usersCount) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  const users = await user.findAll({
    offset: startIndex,
    limit: limit,
    order: sortBy
      ? [[sortBy, sortDirection ? sortDirection : "ASC"]]
      : undefined,
  });

  return {
    users,
    pageCount: Math.ceil(usersCount / limit),
  };
};

app.get("/users", async (req, res) => {
  const sortBy = req.query.sort_by;
  const sortDirection = req.query.sort_direction as "ASC" | "DESC" | undefined;
  const users = await user.findAll({
    limit: req.query.limit ? parseInt(req.query.limit as string) : undefined,
    order: sortBy
      ? [[sortBy as string, sortDirection ? sortDirection : "ASC"]]
      : undefined,
  });

  res.json(users);
});

app.get("/users/with_pagination", async (req, res) => {
  const sortBy = req.query.sort_by;
  const sortDirection = req.query.sort_direction as "ASC" | "DESC" | undefined;
  const page = parseInt(req.query.page as string);
  const limit = parseInt(req.query.limit as string);

  const requestResponse = await paginate(
    user,
    page,
    limit,
    sortBy as string,
    sortDirection as "ASC" | "DESC",
  );
  res.json(requestResponse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
