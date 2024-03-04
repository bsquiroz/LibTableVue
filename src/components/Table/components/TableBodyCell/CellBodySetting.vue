<script setup lang="ts">
import { ref } from "vue";

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

            <div
                class="absolute top-[100%] z-50 right-0 bg-white p-2 rounded-lg flex flex-col transition-all"
                :class="{
                    'opacity-100 visible': isShowMenuSetting,
                    'opacity-0 invisible': !isShowMenuSetting,
                }"
            >
                <article class="box__item__setting">
                    <span class="material-symbols-outlined text-sm">
                        edit_square
                    </span>
                    <span>Edit</span>
                </article>
                <article class="box__item__setting">
                    <span class="material-symbols-outlined text-sm">
                        content_copy
                    </span>
                    <span>Copy</span>
                </article>
                <article class="box__item__setting">
                    <span class="material-symbols-outlined text-sm">
                        domain_verification_off
                    </span>
                    <span>Unpublish</span>
                </article>
                <article class="box__item__setting">
                    <span class="material-symbols-outlined text-sm">
                        visibility
                    </span>
                    <span>Preview</span>
                </article>
                <article class="box__item__setting">
                    <span
                        class="material-symbols-outlined text-sm text-red-500"
                    >
                        delete
                    </span>
                    <span class="text-red-500">Delete</span>
                </article>
            </div>
        </div>
    </td>
</template>

<style scoped>
.box__item__setting {
    @apply flex gap-2 cursor-pointer hover:opacity-80 p-2;
}
</style>
