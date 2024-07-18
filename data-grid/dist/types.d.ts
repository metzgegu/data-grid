import styleInject from '/Users/guillaume.metzger/Documents/perso/data-grid/data-grid/node_modules/style-inject/dist/style-inject.es.js';

var css_248z = "table {\n  border-collapse: collapse;\n}\n\nthead th {\n  position: sticky;\n  top: 0;\n  background-color: white;\n  padding: 8px;\n}\n\n.datagrid__pagination {\n  padding: 8px 16px;\n  align-self: end;\n  position: sticky;\n  bottom: 0;\n  background: white;\n  width: 100%;\n}\n\n.datagrid {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n}\n";
styleInject(css_248z);

type Schema = {
    displayName: string;
    field: string;
    sortable?: boolean;
    editable?: boolean;
}[];
type Row = {
    [key: string]: any;
};
type PaginationOptions = {
    page: number;
    pageSize: number;
    total: number;
    onPageChanged: (page: number) => void;
    onLimitChanged: (limit: number) => void;
    limitOptions: number[];
};

type Props = {
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
declare const DataGrid: React.FC<Props>;

export { DataGrid, type Props };
