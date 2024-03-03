<script setup lang="ts">
import { parseDate } from "../../helpers";

interface Props {
    time: number;
}

defineProps<Props>();
</script>

<template>
    <span>{{ parseDate(time, true) }}</span>
</template>
