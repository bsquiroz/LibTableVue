<script setup lang="ts">
interface Props {
    headerName: string;
}

defineProps<Props>();
</script>

<template>
    <th class="px-6 py-3">
        {{ headerName }}
    </th>
</template>
