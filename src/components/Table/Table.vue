<script setup lang="ts">
import { ColumnTable, RowsTable } from "./interface";
import TableItemHead from "./components/TableItemHead.vue";
import TableItemRow from "./components/TableItemRow.vue";

interface Props {
    columns: ColumnTable[];
    rows: RowsTable[];
}

defineProps<Props>();
</script>

<template>
    <div class="content__table">
        <table class="table">
            <thead class="table__head">
                <tr>
                    <TableItemHead
                        v-for="(column, i) in columns"
                        :key="i"
                        :column="column"
                    />
                </tr>
            </thead>

            <tbody>
                <TableItemRow
                    v-for="(row, i) in rows"
                    :key="i"
                    :row="row"
                    :columns="columns"
                />
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.content__table {
    @apply relative overflow-x-auto shadow-md sm:rounded-lg;
}

.table {
    @apply w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400;
}

.table__head {
    @apply text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400;
}
</style>
