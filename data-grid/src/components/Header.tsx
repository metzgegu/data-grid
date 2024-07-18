import { useState } from "react";
import { Schema } from "../types/types";
import "../styles/Header.css";

export const Header: React.FC<{
  schema: Schema;
  onSort?: (field: string, direction: "ASC" | "DESC") => void;
}> = ({ schema, onSort }) => {
  if (!schema) {
    return <div>Loading ...</div>;
  }
  const [currentSort, setCurrentSort] = useState<{
    field: string;
    direction: "ASC" | "DESC";
  } | null>(null);

  const handleSort = (field: string) => {
    const direction = currentSort?.direction === "ASC" ? "DESC" : "ASC";
    setCurrentSort({ field, direction });
    onSort && onSort(field, direction);
  };

  return (
    <thead>
      <tr>
        {schema.map((column) => (
          <th key={column.field} className="header__th">
            <div
              className="header__cell"
            >
              <div
                className="header__cell__sort"
                style={{ cursor: column.sortable ? "pointer" : "default" }}
                onClick={() => column.sortable && handleSort(column.field)}
              >
                {column.displayName}
                {column.sortable &&
                  currentSort?.field === column.field &&
                  (currentSort.direction === "ASC" ? " ^" : " ⌄")}
              </div>  
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};
