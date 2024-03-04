<script setup lang="ts">
import { ColumnTable } from "../interface";

import CellHeadCheck from "./TableHeadCell/CellHeadCheck.vue";
import CellHeadOrder from "./TableHeadCell/CellHeadOrder.vue";
import CellHeadDefault from "./TableHeadCell/CellHeadDefault.vue";

interface Props {
    column: ColumnTable;
}

const props = defineProps<Props>();
</script>

<template>
    <CellHeadCheck v-if="props.column.value === 'check'" />
    <CellHeadOrder v-else-if="props.column.order" :column="column" />
    <CellHeadDefault v-else :header-name="column.headerName" />
</template>
