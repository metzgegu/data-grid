// @FIXME temporary fix
declare module "data-grid" {
  type Schema = {
    displayName: string;
    field: string;
    sortable?: boolean;
    editable?: boolean;
  }[];
  type Row = {
    [key: string]: any;
  };

  type Props = {
    schema: Schema;
    data: Row[];
    paginationOptions?: {
      page: number;
      pageSize: number;
      total: number;
      onPageChanged: (page: number) => void;
      onLimitChanged: (limit: number) => void;
      limitOptions: number[];
    };
    infiniteScrollOptions?: {
      onScrollEnd: () => void;
    };
    onRowClick?: (row: Row) => void;
    onSort?: (field: string, direction: "ASC" | "DESC") => void;
    onCellContentUpdate?: (row: Row) => void;
  };
  declare const DataGrid: React.FC<Props>;
}
