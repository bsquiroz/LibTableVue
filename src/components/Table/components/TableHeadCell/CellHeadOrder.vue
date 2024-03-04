<script setup lang="ts">
import { computed } from "vue";
import { useTable } from "../../hook/useTable";
import { ColumnTable } from "../../interface";

interface Props {
    column: ColumnTable;
}

const props = defineProps<Props>();

const { handleSorted, sorted } = useTable();

const classActiveFilter = computed(() => ({
    "opacity-100": sorted.value.field === props.column.field,
}));
</script>

<template>
    <th class="px-6 py-3 cursor-pointer">
        <div
            class="flex items-center group"
            @click="handleSorted(column.field, column.value)"
        >
            {{ column.headerName }}
            <span
                class="material-symbols-outlined text-base group-hover:opacity-100 opacity-0"
                :class="classActiveFilter"
            >
                unfold_more
            </span>
        </div>
    </th>
</template>
