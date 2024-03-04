<script setup lang="ts">
import { ValueColumnTable } from "../interface";

import CellBodyCheck from "./TableBodyCell/CellBodyCheck.vue";
import CellBodyDate from "./TableBodyCell/CellBodyDate.vue";
import CellBodyDefault from "./TableBodyCell/CellBodyDefault.vue";
import CellBodySetting from "./TableBodyCell/CellBodySetting.vue";
import CellBodyPublish from "./TableBodyCell/CellBodyPublish.vue";
import CellBodyStatus from "./TableBodyCell/CellBodyStatus.vue";
import CellBodyUrl from "./TableBodyCell/CellBodyUrl.vue";

interface Cell {
    field: ValueColumnTable;
    value: any;
    id: string | number;
}

defineProps<Cell>();
</script>

<template>
    <CellBodyCheck v-if="field === 'check'" />
    <CellBodyStatus v-else-if="field === 'status'" :type="value" />
    <CellBodyPublish v-else-if="field === 'publish'" />
    <CellBodySetting v-else-if="field === 'setting'" />
    <CellBodyDate v-else-if="field === 'date'" :time="value" />
    <CellBodyUrl v-else-if="field === 'url'" :url="value" />
    <CellBodyDefault v-else :value="value" />
</template>
