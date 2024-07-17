import { useEffect, useState } from "react";

export const useUsersDataPaginated = ({
  page,
  limit,
  sort,
  direction,
}: {
  page?: number;
  limit?: number;
  sort?: string;
  direction: "ASC" | "DESC";
}) => {
  const [users, setUsers] = useState<
    {
      name: string;
      birhdate: number;
      email: string;
      address: string;
      phone: string;
    }[]
  >([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!page || !limit) {
        return { users: [], pageCount: 0 };
      }

      const sortBy = sort ? `&sort_by=${sort}&sort_direction=${direction}` : "";
      const response = await fetch(
        `http://localhost:3001/users/with_pagination?page=${page}&limit=${limit}${sortBy}`,
      );
      const responseObject = await response.json();

      setUsers(responseObject.users);
      setPageCount(responseObject.pageCount);
    };

    fetchUsers();
  }, [page, limit, sort, direction]);

  return { users, pageCount };
};
