<script setup lang="ts">
import { ValueColumnTable } from "../interface";

import CellCheck from "./TableTypeCell/CellCheck.vue";
import CellDate from "./TableTypeCell/CellDate.vue";
import CellDefault from "./TableTypeCell/CellDefault.vue";
import CellEdit from "./TableTypeCell/CellEdit.vue";
import CellSetting from "./TableTypeCell/CellSetting.vue";
import CellStatus from "./TableTypeCell/CellStatus.vue";
import CellType from "./TableTypeCell/CellType.vue";
import CellUrl from "./TableTypeCell/CellUrl.vue";

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
