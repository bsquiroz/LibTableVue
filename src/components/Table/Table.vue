<script setup lang="ts">
import { ColumnTable, ConfigTable, RowsTable } from "./interface";
import TableItemHead from "./components/TableItemHead.vue";
import TableItemRow from "./components/TableItemRow.vue";
import { useTable } from "./hook/useTable";

interface Props {
    columns: ColumnTable[];
    rows: RowsTable[];
    config: ConfigTable;
}

const props = defineProps<Props>();

const { initTable, columnsTable, rowsTableComputed } = useTable();

initTable(props.columns, props.rows, props.config);
</script>

<template>
    <div class="content__table">
        <table class="table">
            <thead class="table__head">
                <tr>
                    <TableItemHead
                        v-for="column in columnsTable"
                        :key="column.field"
                        :column="column"
                    />
                </tr>
            </thead>

            <tbody>
                <TableItemRow
                    v-for="row in rowsTableComputed"
                    :key="row.id"
                    :row="row"
                    :columns="columns"
                />
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.content__table {
    @apply relative  shadow-md sm:rounded-lg;
}

.table {
    @apply w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400;
}

.table__head {
    @apply text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400;
}
</style>
