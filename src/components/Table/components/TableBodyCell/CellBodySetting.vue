<script setup lang="ts">
import { ref } from "vue";

import TableItemActions from "../TableItemActions.vue";

const isShowMenuSetting = ref(false);
</script>

<template>
    <td class="text-right pr-2 group">
        <div class="relative">
            <span
                class="material-symbols-outlined cursor-pointer"
                :class="{
                    'text-red-500': isShowMenuSetting,
                }"
                @click="isShowMenuSetting = !isShowMenuSetting"
            >
                {{ isShowMenuSetting ? "close" : "more_vert" }}
            </span>

            <TableItemActions :isShowMenuSetting="isShowMenuSetting" />
        </div>
    </td>
</template>
