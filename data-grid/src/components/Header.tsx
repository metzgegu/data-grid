import { useDataGridContext } from "../contexts/DataGridContext";

export const Header: React.FC = () => {
  const { schema } = useDataGridContext();

  if (!schema) {
    return <div>Loading ...</div>
  }

  return (
    <thead>
      <tr>
        {schema.map((column) => (
          <th key={column.field}>{column.displayName}</th>
        ))}
      </tr>
    </thead>
  );
};
