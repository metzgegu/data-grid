import User from "./database/models/user";

export const paginate = async (
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
  