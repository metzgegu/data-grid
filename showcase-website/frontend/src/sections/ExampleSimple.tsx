import { DataGrid } from "data-grid";
import { useUsersData } from "../hooks/useUsersData";
import { useState } from "react";
import { useUserUpdate } from "../hooks/useUserUpdate";
import { User } from "../types";

export const ExampleSimple: React.FC = () => {
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
  const { updateUser } = useUserUpdate();
  const { users, setUsers } = useUsersData({ limit: 100, sort, direction });

  const handleUserUpdate = async (user: User) => {
    const userUpdated = await updateUser(user);
    setUsers((prevUsers) => {
      return prevUsers.map((u) => (u.id === userUpdated.id ? userUpdated : u));
    });
  };

  return (
    <section>
      <h2>Basic usage of data-grid</h2>
      <p>
        This is a simple example with a basic usage of the data-grid component.
      </p>

      <div style={{ height: "400px" }}>
        <DataGrid
          schema={schema}
          data={users}
          onRowClick={(row) => console.log(row)}
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
