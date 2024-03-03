<script setup lang="ts">
import { ColumnTable } from "../interface";

interface Props {
    column: ColumnTable;
}

defineProps<Props>();
</script>

<template>
    <th v-if="column.value === 'check'" class="px-6 py-3">
        <input type="checkbox" />
    </th>
    <th v-else-if="column.order" class="px-6 py-3 cursor-pointer">
        <div class="flex items-center group">
            {{ column.headerName }}
            <span
                class="material-symbols-outlined text-base group-hover:opacity-100 opacity-0"
            >
                unfold_more
            </span>
        </div>
    </th>
    <th v-else class="px-6 py-3 font-bold">
        {{ column.headerName }}
    </th>
</template>
