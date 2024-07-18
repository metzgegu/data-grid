import { useState } from "react";
import "../styles/Rows.css";
import { Row, Schema } from "../types/types";
import { Cell } from "./Cell";

export const Rows: React.FC<{
  schema: Schema;
  data: Row[];
  onRowClick?: (row: Row) => void;
  onCellContentUpdate?: (row: Row) => void;
}> = ({ schema, data, onRowClick, onCellContentUpdate }) => {
  if (!data || !schema) {
    return <div>Loading ...</div>;
  }

  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index} onClick={() => onRowClick && onRowClick(row)}>
          {schema.map((column, index) => (
            <Cell
              key={`${column.field}-${index}`}
              field={column.field}
              value={row[column.field]}
              onCellContentUpdate={onCellContentUpdate}
              row={row}
              editable={column.editable}
            />
          ))}
        </tr>
      ))}
    </tbody>
  );
};
