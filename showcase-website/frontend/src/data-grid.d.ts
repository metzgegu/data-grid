// @FIXME temporary fix
declare module "data-grid" {
    type Schema = {
        displayName: string;
        field: string;
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
        onRowClick?: (row: Row) => void;
    };
    declare const DataGrid: React.FC<Props>;
}