import "./styles/DataGrid.css";
import { PaginationOptions, Row, Schema } from "./types/types";
import { Rows } from "./components/Rows";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";

export type Props = {
  schema: Schema;
  data: Row[];
  paginationOptions?: PaginationOptions;
  onRowClick?: (row: Row) => void;
};

export const DataGrid: React.FC<Props> = ({ schema, data, onRowClick, paginationOptions }) => {
  return (
    <div className="datagrid">
      <table className="table">
        <Header schema={schema} />

        <Rows schema={schema} data={data} onRowClick={onRowClick}/>
      </table>

      {paginationOptions && (
        <div className="datagrid__pagination">
          <Pagination paginationOptions={paginationOptions} />
        </div>
      )}
    </div>
  );
};
