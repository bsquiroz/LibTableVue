<script setup lang="ts">
import { ColumnTable, RowsTable } from "../interface";

import TableItemCell from "./TableItemCell.vue";

interface Props {
    row: RowsTable;
    columns: ColumnTable[];
}

const props = defineProps<Props>();

const cells = props.columns.map((column) => {
    const field = column.value;
    const value = props.row[column.field];
    const id = props.row["id"];
    return { field, value, id };
});
</script>

<template>
    <tr class="table__row">
        <TableItemCell v-for="cell in cells" :key="cell.id" v-bind="cell" />
    </tr>
</template>

<style scoped>
.table__row {
    @apply odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700;
}
</style>
