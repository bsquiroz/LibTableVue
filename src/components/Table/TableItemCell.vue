<script setup lang="ts">
import { ValueColumnTable } from "./interface";

import ActionEdit from "./TableTypeCell/ActionEdit.vue";
import IconMore from "./TableTypeCell/IconMore.vue";
import TypePill from "./TableTypeCell/TypePill.vue";
import Toggle from "./TableTypeCell/Toggle.vue";

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
        <TypePill :type="value" />
    </td>
    <td class="px-6 py-4" v-else-if="field === 'switch'">
        <Toggle />
    </td>
    <td class="px-6 py-4" v-else-if="field === 'edit'">
        <ActionEdit />
    </td>
    <td class="px-6 py-4" v-else-if="field === 'setting'">
        <IconMore />
    </td>
    <td class="px-6 py-4" v-else="field === 'check'">
        <input type="checkbox" />
    </td>
</template>
