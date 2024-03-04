<script setup lang="ts">
interface Props {
    url: string;
}

defineProps<Props>();
</script>

<template>
    <td class="px-6 py-4">
        <a :href="url" target="_blank">{{
            url.length > 17 ? `${url.slice(0, 17)}...` : url
        }}</a>
    </td>
</template>
