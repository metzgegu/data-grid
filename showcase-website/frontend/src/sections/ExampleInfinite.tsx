import { DataGrid } from "data-grid";
import { useState } from "react";
import { useUsersDataInfinite } from "../hooks/useUsersDataInfinite";

export const ExampleInfinite: React.FC = () => {
  const schema = [
    { displayName: "Name", field: "name", sortable: true },
    { displayName: "Birth Date", field: "birthdate", sortable: true },
    { displayName: "Email", field: "email", sortable: true },
    { displayName: "Address", field: "address", sortable: true },
    { displayName: "Phone", field: "phone", sortable: true },
  ];
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [direction, setDirection] = useState<"ASC" | "DESC">("ASC");
  const [currentPage, setCurrentPage] = useState(1);

  const { users, pageCount } = useUsersDataInfinite({
    page: currentPage,
    limit: 50,
    sort,
    direction,
  });

  return (
    <section>
      <h2>Lazy load data-grid</h2>
      <p>This is a example with a infinite scroll data-grid component.</p>

      <div style={{ height: "400px" }}>
        <DataGrid
          schema={schema}
          data={users}
          onRowClick={(row) => console.log(row)}
          infiniteScrollOptions={{
            onScrollEnd: () => {
              pageCount > currentPage && setCurrentPage(currentPage + 1);
            },
          }}
          onSort={(field, direction) => {
            setSort(field);
            setDirection(direction);
          }}
        />
      </div>
    </section>
  );
};