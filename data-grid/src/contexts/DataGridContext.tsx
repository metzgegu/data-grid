import { createContext, useContext } from "react";
import { Row, Schema } from "../types/types";

type DataGridContextValue = {
  schema: Schema;
  data: Row[];
  onRowClick?: (row: Row) => void;
};

const DataGridContext = createContext<DataGridContextValue>(
  {} as DataGridContextValue,
);

export const useDataGridContext = () => useContext(DataGridContext);
export const DataGridContextProvider = DataGridContext.Provider;
