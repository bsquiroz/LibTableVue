<script setup lang="ts">
import { computed } from "vue";
import { useTable } from "../../hook/useTable";
import { ColumnTable } from "../../interface";

interface Props {
    column: ColumnTable;
}

const props = defineProps<Props>();

const { handleSorted, sorted } = useTable();

const classActiveFilterAsc = computed(() => ({
    "opacity-100":
        sorted.value.field === props.column.field &&
        sorted.value.order === "asc",
}));

const classActiveFilterDesc = computed(() => ({
    "opacity-100":
        sorted.value.field === props.column.field &&
        sorted.value.order === "desc",
}));
</script>

<template>
    <th class="px-6 py-3 cursor-pointer">
        <div class="flex items-center group">
            {{ column.headerName }}
            <div class="flex flex-col items-center">
                <span
                    class="material-symbols-outlined text-base cursor-pointer opacity-0 hover:opacity-100 group-hover:opacity-100"
                    @click="handleSorted(column.field, column.value, 'asc')"
                    :class="classActiveFilterAsc"
                >
                    arrow_drop_up
                </span>
                <span
                    class="material-symbols-outlined text-base cursor-pointer opacity-0 hover:opacity-100 group-hover:opacity-100"
                    @click="handleSorted(column.field, column.value, 'desc')"
                    :class="classActiveFilterDesc"
                >
                    arrow_drop_down
                </span>
            </div>
        </div>
    </th>
</template>
