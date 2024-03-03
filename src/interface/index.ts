export type ValueColumnTable =
    | "check"
    | "switch"
    | "edit"
    | "pill"
    | "string"
    | "number"
    | "setting";

export interface ColumnTable {
    field: string;
    headerName: string;
    value: ValueColumnTable;
}

export type RowsTable = Record<string | symbol, any>;
