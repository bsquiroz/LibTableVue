<script setup lang="ts">
import { ValueColumnTable } from "../interface";

import CellCheck from "./TableTypeCell/CellCheck.vue";
import CellDate from "./TableTypeCell/CellDate.vue";
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
    <td class="px-6 py-4" v-if="field === 'string' || field === 'number'">
        {{ value }}
    </td>
    <td class="px-6 py-4" v-else-if="field === 'pill'">
        <CellType :type="value" />
    </td>
    <td class="px-6 py-4" v-else-if="field === 'switch'">
        <CellStatus />
    </td>
    <td class="px-6 py-4" v-else-if="field === 'edit'">
        <CellEdit />
    </td>
    <td class="px-6 py-4" v-else-if="field === 'setting'">
        <CellSetting />
    </td>
    <td class="px-6 py-4" v-else-if="field === 'date'">
        <CellDate :time="value" />
    </td>
    <td class="px-6 py-4" v-else-if="field === 'url'">
        <CellUrl :url="value" />
    </td>
    <td class="px-6 py-4" v-else="field === 'check'">
        <CellCheck />
    </td>
</template>
