<script setup lang="ts">
import { computed } from "vue";

interface Props {
    type: "frontend" | "backend" | "fullstack" | "Q&A" | "DevOps";
}

const props = defineProps<Props>();

const stylesType = computed(() => ({
    "bg-red-500 text-white": props.type === "frontend",
    "bg-green-500 text-white": props.type === "DevOps",
    "bg-yellow-500 text-black": props.type === "Q&A",
    "bg-blue-500 text-black": props.type === "backend",
    "bg-purple-500 text-white": props.type === "fullstack",
}));
</script>

<template>
    <span
        class="inline-block px-2 py-1 text-xs rounded-full"
        :class="stylesType"
        >{{ type }}</span
    >
</template>
