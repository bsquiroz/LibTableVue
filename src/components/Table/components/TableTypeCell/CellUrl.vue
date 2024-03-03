<script setup lang="ts">
interface Props {
    url: string;
}

defineProps<Props>();
</script>

<template>
    <td class="px-6 py-4">
        <a :href="url" target="_blank">clic</a>
    </td>
</template>
