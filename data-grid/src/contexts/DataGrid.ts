import { type UUID } from "node:crypto";

import { createContext, useContext } from "react";
import { Props } from "../types/types";

const dataGridContext = createContext({} as Props);

export const useDataGridContext = () => useContext(dataGridContext);
export const DataGridContextProvider = dataGridContext.Provider;
