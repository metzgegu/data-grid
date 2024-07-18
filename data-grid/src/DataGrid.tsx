import "./styles/DataGrid.css";
import { PaginationOptions, Row, Schema } from "./types/types";
import { Rows } from "./components/Rows";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";

export type Props = {
  schema: Schema;
  data: Row[];
  paginationOptions?: PaginationOptions;
  infiniteScrollOptions?: {
    onScrollEnd: () => void;
  };
  onRowClick?: (row: Row) => void;
  onSort?: (field: string, direction: "ASC" | "DESC") => void;
  onCellContentUpdate?: (row: Row) => void;
};

export const DataGrid: React.FC<Props> = ({
  schema,
  data,
  onRowClick,
  paginationOptions,
  infiniteScrollOptions,
  onSort,
  onCellContentUpdate,
}) => {
  const handleScroll = (e: any) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      infiniteScrollOptions?.onScrollEnd();
    }
  };

  return (
    <div className="datagrid" onScroll={handleScroll}>
      <table className="table">
        <Header schema={schema} onSort={onSort} />

        <Rows
          schema={schema}
          data={data}
          onRowClick={onRowClick}
          onCellContentUpdate={onCellContentUpdate}
        />
      </table>

      {paginationOptions && (
        <div className="datagrid__pagination">
          <Pagination paginationOptions={paginationOptions} />
        </div>
      )}
    </div>
  );
};
