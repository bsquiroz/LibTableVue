import { computed, ref } from "vue";

import { ColumnTable, ConfigTable, RowsTable } from "../interface";

type ORDER_SORTED = "desc" | "asc" | null;

interface Sorted {
    field: string | null;
    value: string | number | null;
    order: ORDER_SORTED;
}

const columnsTable = ref<ColumnTable[]>([]);
const rowsTable = ref<RowsTable[]>([]);

const configTable = ref<ConfigTable>({ checks: false, settings: false });

const sorted = ref<Sorted>({
    field: null,
    value: null,
    order: null,
});

export function useTable() {
    const initTable = (
        columns: ColumnTable[],
        rows: RowsTable[],
        config: ConfigTable
    ) => {
        columnsTable.value = columns;
        rowsTable.value = rows;

        if (config.checks) {
            configTable.value.checks = config.checks;

            columnsTable.value.unshift({
                field: "check",
                headerName: "Checkout",
                value: "check",
            });
        }

        if (config.settings) {
            configTable.value.settings = config.settings;

            columnsTable.value.push({
                field: "setting",
                headerName: "",
                value: "setting",
            });
        }
    };

    const rowsTableComputed = computed(() => {
        if (sorted.value.value && sorted.value.field) {
            if (sorted.value.value === "string")
                return rowsTable.value.slice().sort((a, b) => {
                    const valueA = a[sorted.value.field!].toLowerCase();
                    const valueB = b[sorted.value.field!].toLowerCase();
                    return sorted.value.order === "asc"
                        ? valueA.localeCompare(valueB)
                        : valueB.localeCompare(valueA);
                });

            if (sorted.value.value === "number")
                return rowsTable.value.slice().sort((a, b) => {
                    const valueA = a[sorted.value.field!];
                    const valueB = b[sorted.value.field!];
                    return sorted.value.order === "asc"
                        ? valueA - valueB
                        : valueB - valueA;
                });

            if (sorted.value.value === "date")
                return rowsTable.value.slice().sort((a, b) => {
                    const valueA = a[sorted.value.field!];
                    const valueB = b[sorted.value.field!];
                    return sorted.value.order === "asc"
                        ? valueA - valueB
                        : valueB - valueA;
                });
        }

        return rowsTable.value;
    });

    const handleSorted = (
        field: string,
        value: string,
        order: "desc" | "asc"
    ) => {
        if (
            !sorted.value.value ||
            sorted.value.field !== field ||
            sorted.value.order !== order
        ) {
            sorted.value.value = value;
            sorted.value.field = field;
            sorted.value.order = order;
        } else {
            sorted.value.value = null;
            sorted.value.field = null;
            sorted.value.order = null;
        }
    };

    return {
        initTable,
        rowsTableComputed,
        columnsTable,
        sorted,
        handleSorted,
        configTable,
    };
}
