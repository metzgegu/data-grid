import { useEffect, useState } from "react";
import { User } from "../types";

export const useUsersData = ({
  limit,
  sort,
  direction,
}: {
  limit: number;
  sort?: string;
  direction: "ASC" | "DESC";
}) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const sortBy = sort ? `&sort_by=${sort}&sort_direction=${direction}` : "";
      const response = await fetch(
        `http://localhost:3001/users?limit=${limit}${sortBy}`,
      );
      const responseObject = await response.json();
      setUsers(responseObject);
    };

    fetchUsers();
  }, [limit, sort, direction]);

  return { users, setUsers };
};
