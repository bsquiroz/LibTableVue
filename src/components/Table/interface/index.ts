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
    order?: boolean;
}

export type RowsTable = Record<string | symbol, any>;
