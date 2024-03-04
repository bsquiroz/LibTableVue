<script setup lang="ts">
import { ValueColumnTable } from "../interface";

import CellCheck from "./TableBodyCell/CellBodyCheck.vue";
import CellDate from "./TableBodyCell/CellBodyDate.vue";
import CellDefault from "./TableBodyCell/CellBodyDefault.vue";
import CellEdit from "./TableBodyCell/CellBodyEdit.vue";
import CellSetting from "./TableBodyCell/CellBodySetting.vue";
import CellStatus from "./TableBodyCell/CellBodyStatus.vue";
import CellType from "./TableBodyCell/CellBodyType.vue";
import CellUrl from "./TableBodyCell/CellBodyUrl.vue";

interface Cell {
    field: ValueColumnTable;
    value: any;
}

defineProps<Cell>();
</script>

<template>
    <CellCheck v-if="field === 'check'" />
    <CellType v-else-if="field === 'pill'" :type="value" />
    <CellStatus v-else-if="field === 'switch'" />
    <CellEdit v-else-if="field === 'edit'" />
    <CellSetting v-else-if="field === 'setting'" />
    <CellDate v-else-if="field === 'date'" :time="value" />
    <CellUrl v-else-if="field === 'url'" :url="value" />
    <CellDefault v-else :value="value" />
</template>
