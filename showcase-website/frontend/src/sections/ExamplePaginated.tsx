import { DataGrid } from "data-grid";
import { useState } from "react";
import { useUsersDataPaginated } from "../hooks/useUsersDataPaginated";
import { useUserUpdate } from "../hooks/useUserUpdate";
import { User } from "../types";

export const ExamplePaginated: React.FC = () => {
  const schema = [
    { displayName: "Name", field: "name", sortable: true, editable: true },
    { displayName: "Birth Date", field: "birthdate", sortable: true },
    { displayName: "Email", field: "email", sortable: true, editable: true },
    {
      displayName: "Address",
      field: "address",
      sortable: true,
      editable: true,
    },
    { displayName: "Phone", field: "phone", sortable: true, editable: true },
  ];
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [direction, setDirection] = useState<"ASC" | "DESC">("ASC");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { users, pageCount, setUsers } = useUsersDataPaginated({
    page: currentPage,
    limit,
    sort,
    direction,
  });

  const { updateUser } = useUserUpdate();
  const handleUserUpdate = async (user: User) => {
    const userUpdated = await updateUser(user);
    setUsers((prevUsers) => {
      return prevUsers.map((u) => (u.id === userUpdated.id ? userUpdated : u));
    });
  };

  return (
    <section>
      <h2>Paginated data-grid</h2>
      <p>This is a example with a paginated data-grid component.</p>

      <div style={{ height: "400px" }}>
        <DataGrid
          schema={schema}
          data={users}
          onRowClick={(row) => console.log(row)}
          paginationOptions={{
            page: currentPage,
            pageSize: limit,
            total: pageCount,
            onPageChanged: (page) => setCurrentPage(page),
            onLimitChanged: (newLimit) => {
              setLimit(newLimit);
              setCurrentPage(1);
            },
            limitOptions: [10, 20, 50],
          }}
          onSort={(field, direction) => {
            setSort(field);
            setDirection(direction);
          }}
          onCellContentUpdate={(row) => handleUserUpdate(row as User)}
        />
      </div>
    </section>
  );
};
