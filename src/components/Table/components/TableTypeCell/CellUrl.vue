<script setup lang="ts">
interface Props {
    url: string;
}

defineProps<Props>();
</script>

<template>
    <a :href="url" target="_blank">clic</a>
</template>
