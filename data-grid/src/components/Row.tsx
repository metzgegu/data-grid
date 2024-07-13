import { useDataGridContext } from "../contexts/DataGridContext";

export const Row = () => {
  const { schema, data, onRowClick } = useDataGridContext();

  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index} onClick={() => onRowClick && onRowClick(row)}>
          {schema.map((column) => (
            <td key={column.field}>{row[column.field]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
