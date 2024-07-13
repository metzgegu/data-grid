import { Row, Schema } from "./types/types";
import { DataGridContextProvider } from "./contexts/DataGridContext";

export type Props = {
  schema: Schema;
  data: Row[];
  onRowClick?: (row: Row) => void;
};

export const DataGrid: React.FC<Props> = ({ schema, data, onRowClick }) => {
  return (
    <DataGridContextProvider value={{ schema, data, onRowClick }}>
      <table>
        <thead>
          <tr>
            {schema.map((column) => (
              <th key={column.field}>{column.displayName}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index} onClick={() => onRowClick && onRowClick(row)}>
              {schema.map((column) => (
                <td key={column.field}>{row[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </DataGridContextProvider>
  );
};
