<template>
    <td class="text-right pr-2 group">
        <div class="relative">
            <span class="material-symbols-outlined cursor-pointer">
                more_vert
            </span>

            <div
                class="absolute bottom-0 right-0 top-[100%] z-50 bg-white p-2 rounded-lg flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible"
            >
                <article class="flex gap-2 cursor-pointer hover:opacity-80">
                    <span class="material-symbols-outlined text-sm">
                        edit_square
                    </span>
                    <span>Edit</span>
                </article>
                <article class="flex gap-2 cursor-pointer hover:opacity-80">
                    <span class="material-symbols-outlined text-sm">
                        content_copy
                    </span>
                    <span>Copy</span>
                </article>
                <article class="flex gap-2 cursor-pointer hover:opacity-80">
                    <span class="material-symbols-outlined text-sm">
                        domain_verification_off
                    </span>
                    <span>Unpublish</span>
                </article>
                <article class="flex gap-2 cursor-pointer hover:opacity-80">
                    <span class="material-symbols-outlined text-sm">
                        visibility
                    </span>
                    <span>Preview</span>
                </article>
                <article class="flex gap-2 cursor-pointer hover:opacity-80">
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
