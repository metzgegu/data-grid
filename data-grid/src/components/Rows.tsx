import "../styles/Rows.css";
import { Cell } from "./Cell";
import { useDataGridContext } from "../contexts/DataGrid";

export const Rows: React.FC = () => {
  const { schema, data, onRowClick, onCellContentUpdate, onRowDelete } =
    useDataGridContext();

  if (!data || !schema) {
    return (
      <tbody>
        <tr>
          <td>Loading ...</td>
        </tr>
      </tbody>
    );
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
          {onRowDelete && (
            <td>
              <button className="row__delete" onClick={() => onRowDelete(row)}>
                🗑️
              </button>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
};
