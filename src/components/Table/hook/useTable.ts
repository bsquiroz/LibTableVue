import { computed, ref } from "vue";

import { ColumnTable, RowsTable } from "../interface";

interface Sorted {
    field: string | null;
    value: string | number | null;
}

const columnsTable = ref<ColumnTable[]>([]);
const rowsTable = ref<RowsTable[]>([]);

const sorted = ref<Sorted>({
    field: null,
    value: null,
});

export function useTable() {
    const initTable = (columns: ColumnTable[], rows: RowsTable[]) => {
        columnsTable.value = columns;
        rowsTable.value = rows;
    };

    const rowsTableComputed = computed(() => {
        if (sorted.value.value && sorted.value.field) {
            if (sorted.value.value === "string")
                return rowsTable.value.slice().sort((a, b) => {
                    const valueA = a[sorted.value.field!].toLowerCase();
                    const valueB = b[sorted.value.field!].toLowerCase();
                    return valueA.localeCompare(valueB);
                });

            if (sorted.value.value === "number")
                return rowsTable.value.slice().sort((a, b) => {
                    const valueA = a[sorted.value.field!];
                    const valueB = b[sorted.value.field!];
                    return valueA - valueB;
                });

            if (sorted.value.value === "date")
                return rowsTable.value.slice().sort((a, b) => {
                    const valueA = a[sorted.value.field!];
                    const valueB = b[sorted.value.field!];
                    return valueA - valueB;
                });
        }

        return rowsTable.value;
    });

    const handleSorted = (field: string, value: string) => {
        if (!sorted.value.value || sorted.value.field !== field) {
            sorted.value.value = value;
            sorted.value.field = field;
        } else {
            sorted.value.value = null;
            sorted.value.field = null;
        }
    };

    return {
        initTable,
        rowsTableComputed,
        columnsTable,
        sorted,
        handleSorted,
    };
}
