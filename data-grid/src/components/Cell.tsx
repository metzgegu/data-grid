import { useState } from "react";
import { Row } from "../types/types";

export const Cell: React.FC<{
  row: Row;
  field: string;
  value: string;
  onCellContentUpdate?: (row: Row) => void;
  editable?: boolean;
}> = ({ field, value, row, onCellContentUpdate, editable }) => {
  const [editing, setEditing] = useState<boolean>(false);

  const handleDoubleClick = (e: React.MouseEvent<HTMLTableCellElement>) => {
    if (!editable) return;

    setEditing(!editing);
  };

  const handleUpdateCell = (e: React.FocusEvent<HTMLInputElement>) => {
    setEditing(false);
    onCellContentUpdate &&
      onCellContentUpdate({ ...row, [field]: e.target.value });
  };

  return (
    <td className="cell" key={field} onDoubleClick={handleDoubleClick}>
      {editing ? (
        <input
          autoFocus
          type="text"
          defaultValue={value}
          onBlur={handleUpdateCell}
        />
      ) : (
        <div className="cell_content">{value}</div>
      )}
    </td>
  );
};
