<script setup lang="ts">
import { parseDate } from "../../helpers";

interface Props {
    time: number;
}

defineProps<Props>();
</script>

<template>
    <td class="px-6 py-4">
        <span>{{ parseDate(time) }}</span>
    </td>
</template>
