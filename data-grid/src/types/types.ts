export type Schema = {
  displayName: string;
  field: string;
  sortable?: boolean;
  editable?: boolean;
}[];

export type Row = {
  [key: string]: any;
};

export type PaginationOptions = {
  page: number;
  pageSize: number;
  total: number;
  onPageChanged: (page: number) => void;
  onLimitChanged: (limit: number) => void;
  limitOptions: number[];
};

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
  onRowDelete?: (row: Row) => void;
};
