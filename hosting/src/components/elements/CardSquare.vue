<template>
    <div class="aspect-square group cursor-pointer hover:shadow-lg bg-white transition-shadow">
        <div class="aspect-square p-5 gap-2 flex flex-col justify-between">
            <div>
                <p class="text-red-700/70 text-sm mb-1">Event</p>
                <p class="font-bold mb-2 group-hover:text-green-800" :class="titleClass">
                    <slot name="title">{{ title }}</slot>
                </p>
                <p class="leading-6 text-gray-600 text-sm line-clamp-5">
                    <slot name="content">{{ content }}</slot>
                </p>
            </div>
            <a v-if="link" :href="link" class="text-green-700 text-sm group-hover:underline">
                <slot name="link">{{ linkLabel }}</slot>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    titleClass: string,
    content: string,
    link: string,
    linkLabel: string,
}>();
</script>
