import { Row, Schema } from "./types/types";
import { DataGridContextProvider } from "./contexts/DataGridContext";
import { Rows } from "./components/Rows";
import { Header } from "./components/Header";

export type Props = {
  schema: Schema;
  data: Row[];
  onRowClick?: (row: Row) => void;
};

export const DataGrid: React.FC<Props> = ({ schema, data, onRowClick }) => {
  return (
    <DataGridContextProvider value={{ schema, data, onRowClick }}>
      <table>
        <Header />

        <Rows />
      </table>
    </DataGridContextProvider>
  );
};
