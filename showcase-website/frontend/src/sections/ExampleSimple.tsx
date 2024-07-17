import { DataGrid } from "data-grid";
import { useUsersData } from "../hooks/useUsersData";
import { useState } from "react";

export const ExampleSimple: React.FC = () => {
  const schema = [
    { displayName: "Name", field: "name", sortable: true },
    { displayName: "Birth Date", field: "birthdate", sortable: true },
    { displayName: "Email", field: "email", sortable: true },
    { displayName: "Address", field: "address", sortable: true },
    { displayName: "Phone", field: "phone", sortable: true },
  ];
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [direction, setDirection] = useState<"ASC" | "DESC">("ASC");

  const { users } = useUsersData({ limit: 100, sort, direction });

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
        />
      </div>
    </section>
  );
};
