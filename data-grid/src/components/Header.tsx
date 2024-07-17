import { Schema } from "../types/types";

export const Header: React.FC<{ schema: Schema }> = ({ schema }) => {
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
