export type ValueColumnTable =
    | "number"
    | "string"
    | "url"
    | "date"
    | "check"
    | "publish"
    | "status"
    | "setting";

export interface ColumnTable {
    field: string;
    headerName: string;
    value: ValueColumnTable;
    order?: boolean;
}

export interface ConfigTable {
    checks: boolean;
    settings: boolean;
}

export type RowsTable = Record<string | symbol, any>;
