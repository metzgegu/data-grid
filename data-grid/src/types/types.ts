export type Schema = {
  displayName: string;
  field: string;
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
