import "./styles/DataGrid.css";
import { PaginationOptions, Props, Row, Schema } from "./types/types";
import { Rows } from "./components/Rows";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import { DataGridContextProvider } from "./contexts/DataGrid";

export const DataGrid: React.FC<Props> = ({
  schema,
  data,
  onRowClick,
  paginationOptions,
  infiniteScrollOptions,
  onSort,
  onCellContentUpdate,
  onRowDelete,
}) => {
  const handleScroll = (e: any) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop < e.target.clientHeight + e.target.clientHeight;
    if (bottom) {
      infiniteScrollOptions?.onScrollEnd();
    }
  };

  return (
    <DataGridContextProvider 
      value={{
        schema,
        data,
        onRowClick,
        paginationOptions,
        infiniteScrollOptions,
        onSort,
        onCellContentUpdate,
        onRowDelete 
      }}
    >
      <div className="datagrid" onScroll={handleScroll}>
        <table className="table">
          <Header />

          <Rows />
        </table>

        {paginationOptions && (
          <div className="datagrid__pagination">
            <Pagination paginationOptions={paginationOptions} />
          </div>
        )}
      </div>
    </DataGridContextProvider>
  );
};
