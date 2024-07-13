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
        onRowClick?: (row: Row) => void;
    };
    declare const DataGrid: React.FC<Props>;
}