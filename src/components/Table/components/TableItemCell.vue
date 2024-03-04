<script setup lang="ts">
import { ValueColumnTable } from "../interface";

import CellBodyCheck from "./TableBodyCell/CellBodyCheck.vue";
import CellBodyDate from "./TableBodyCell/CellBodyDate.vue";
import CellBodyDefault from "./TableBodyCell/CellBodyDefault.vue";
import CellBodyEdit from "./TableBodyCell/CellBodyEdit.vue";
import CellBodySetting from "./TableBodyCell/CellBodySetting.vue";
import CellBodyStatus from "./TableBodyCell/CellBodyStatus.vue";
import CellBodyType from "./TableBodyCell/CellBodyType.vue";
import CellBodyUrl from "./TableBodyCell/CellBodyUrl.vue";

interface Cell {
    field: ValueColumnTable;
    value: any;
}

defineProps<Cell>();
</script>

<template>
    <CellBodyCheck v-if="field === 'check'" />
    <CellBodyType v-else-if="field === 'pill'" :type="value" />
    <CellBodyStatus v-else-if="field === 'switch'" />
    <CellBodyEdit v-else-if="field === 'edit'" />
    <CellBodySetting v-else-if="field === 'setting'" />
    <CellBodyDate v-else-if="field === 'date'" :time="value" />
    <CellBodyUrl v-else-if="field === 'url'" :url="value" />
    <CellBodyDefault v-else :value="value" />
</template>
