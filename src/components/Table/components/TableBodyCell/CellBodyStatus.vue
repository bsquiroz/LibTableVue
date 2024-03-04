<script setup lang="ts">
import { computed } from "vue";

interface Props {
    type: "published" | "pending" | "fullstack" | "paused" | "disabled";
}

const props = defineProps<Props>();

const stylesType = computed(() => ({
    "bg-green-500 text-white": props.type === "published",
    "bg-yellow-500 text-black": props.type === "paused",
    "bg-red-500 text-white": props.type === "disabled",
    "bg-blue-500 text-black": props.type === "pending",
}));
</script>

<template>
    <td class="px-6 py-4">
        <span
            class="inline-block px-2 py-1 text-xs rounded-full"
            :class="stylesType"
            >{{ type }}</span
        >
    </td>
</template>
