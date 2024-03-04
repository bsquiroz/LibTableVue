<script setup lang="ts">
interface Props {
    isShowMenuSetting: boolean;
}

defineProps<Props>();
</script>

<template>
    <div
        class="absolute top-[100%] z-50 right-0 bg-white p-2 rounded-lg flex flex-col justify-start items-start transition-all"
        :class="{
            'opacity-100 visible': isShowMenuSetting,
            'opacity-0 invisible': !isShowMenuSetting,
        }"
    >
        <article class="box__item__setting">
            <span class="material-symbols-outlined text-sm"> edit_square </span>
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
            <span class="material-symbols-outlined text-sm"> visibility </span>
            <span>Preview</span>
        </article>
        <article class="box__item__setting">
            <span class="material-symbols-outlined text-sm text-red-500">
                delete
            </span>
            <span class="text-red-500">Delete</span>
        </article>
    </div>
</template>

<style scoped>
.box__item__setting {
    @apply flex gap-2 cursor-pointer hover:opacity-80 p-2;
}
</style>
