export type ValueColumnTable =
    | "number"
    | "string"
    | "url"
    | "date"
    | "check"
    | "switch"
    | "edit"
    | "pill"
    | "setting";

export interface ColumnTable {
    field: string;
    headerName: string;
    value: ValueColumnTable;
    order?: boolean;
}

export type RowsTable = Record<string | symbol, any>;
