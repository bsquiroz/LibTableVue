<script setup lang="ts">
interface Props {
    value: string | number;
}

defineProps<Props>();
</script>

<template>
    <td class="px-6 py-4">
        <span>{{ value }}</span>
    </td>
</template>
