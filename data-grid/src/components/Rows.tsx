import "../styles/Rows.css";
import { Row, Schema } from "../types/types";

export const Rows: React.FC<{ schema: Schema, data: Row[], onRowClick?: (row: Row) => void }> = ({ schema, data, onRowClick }) => {
  if (!data || !schema) {
    return <div>Loading ...</div>
  }

  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index} onClick={() => onRowClick && onRowClick(row)}>
          {schema.map((column) => ( 
            <td className="cell" key={column.field}>
              <div className="cell_content">
                {row[column.field]}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
