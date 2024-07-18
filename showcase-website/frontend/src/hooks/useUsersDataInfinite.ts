import { useEffect, useState } from "react";
import { User } from "../types";

export const useUsersDataInfinite = ({
  limit,
  sort,
  direction,
}: {
  limit?: number;
  sort?: string;
  direction: "ASC" | "DESC";
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState<User[]>([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentSort, setCurrentSort] = useState<string | undefined>(sort);
  const [currentDirection, setCurrentDirection] = useState<string | undefined>(
    direction,
  );
  if (sort !== currentSort || direction !== currentDirection) {
    setUsers([]);
    setCurrentPage(1);
    setCurrentSort(sort);
    setCurrentDirection(direction);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      if (!currentPage || !limit) {
        return { users: [], pageCount: 0 };
      }

      const sortBy = sort ? `&sort_by=${sort}&sort_direction=${direction}` : "";
      const response = await fetch(
        `http://localhost:3001/users/with_pagination?page=${currentPage}&limit=${limit}${sortBy}`,
      );
      const responseObject = await response.json();

      setUsers([...users, ...responseObject.users]);
      setPageCount(responseObject.pageCount);
    };

    fetchUsers();
  }, [currentPage, limit, sort, direction]);

  return { users, pageCount, currentPage, setCurrentPage };
};
