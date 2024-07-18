import { Response, Request } from "express";
import user from "./database/models/user";
import { paginate } from "./pagination";

export const getUsers = async (req: Request, res: Response) => {
    const sortBy = req.query.sort_by;
    const sortDirection = req.query.sort_direction as "ASC" | "DESC" | undefined;
    const users = await user.findAll({
      limit: req.query.limit ? parseInt(req.query.limit as string) : undefined,
      order: sortBy
        ? [[sortBy as string, sortDirection ? sortDirection : "ASC"]]
        : undefined,
    });
  
    res.json(users);
}

export const getUsersPaginated = async (req: Request, res: Response) => {
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
}

export const updateUser = async (req: Request, res: Response) => {
    const id = req.params.id;
  const userToUpdate = await user.findByPk(id);

  if (!userToUpdate) {
    res.status(404).send("User not found");
    return;
  }

  await userToUpdate.update(req.body);
  await userToUpdate.save();
  res.json(userToUpdate);
}

export const deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;
  const userToDelete = await user.findByPk(id);

  if (!userToDelete) {
    res.status(404).send("User not found");
    return;
  }

  await userToDelete.destroy();
  res.status(204).send();
}
