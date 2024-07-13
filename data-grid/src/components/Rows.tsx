import { useDataGridContext } from "../contexts/DataGridContext";

export const Rows = () => {
  const { schema, data, onRowClick } = useDataGridContext();

  if (!data || !schema) {
    return <div>Loading ...</div>
  }

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
